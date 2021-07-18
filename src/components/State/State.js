import React, { useState, useEffect } from "react";
import { isNull, get } from "lodash";
import DataCard from "../DataCard/DataCard";
import SubHeader from "../SubHeader/SubHeader";
import { BodyWrapper, LoaderWrapper } from "../Home/Home.styled";
import TextField from "@material-ui/core/TextField";
import { AutoCompletWrapper, HeadingWrapper } from "./State.styled";
import DataTable from "../DataTable/DataTable";
import Loader from "../Loader/Loader";

const State = (props) => {
  let [stateName, setStateName] = useState("Kerala");
  let [stateDataDistrictWise, setStateDataDistrictWise] = useState(null);
  let {
    stateWiseSummary,
    lastRefreshed,
    isLoadingVaccine,
    indiaStateWiseData,
  } = props;

  let stateData = !isNull(stateWiseSummary)
    ? stateWiseSummary.find((value) => value.loc === stateName)
    : null;
  let activeCases =
    get(stateData, "totalConfirmed", "0") -
    (get(stateData, "discharged", "0") + get(stateData, "deaths", "0"));
  let cardData = [
    {
      heading: "Total Confirmed",
      number: get(stateData, "totalConfirmed", "0"),
      color: "tan",
    },
    {
      heading: "Recovered",
      number: get(stateData, "discharged", "0"),
      color: "lightgreen",
    },
    {
      heading: "Active Cases",
      number: activeCases,
      color: "gold",
    },
    {
      heading: "Total Death",
      number: get(stateData, "deaths", "0"),
      color: "crimson",
    },
  ];

  let stateNameList = !isNull(stateWiseSummary)
    ? stateWiseSummary.map((value, index) => {
        return {
          name: value.loc,
          value: value.loc,
        };
      })
    : [];

  const getDistrctData = (district) => {
    let districtKey = null;
    districtKey = Object.keys(indiaStateWiseData).find(
      (value) => value === district
    );
    let districtDataObject = indiaStateWiseData[districtKey];

    let districtWiseDataForTable = [];
    Object.keys(districtDataObject.districtData).forEach((value) => {
      let row = [
        value,
        get(districtDataObject.districtData[value], "active", 0),
        get(districtDataObject.districtData[value], "confirmed", 0),
        get(districtDataObject.districtData[value], "recovered", 0),
        get(districtDataObject.districtData[value], "deceased", 0),
      ];
      districtWiseDataForTable.push(row);
    });

    return districtWiseDataForTable;
  };
  const setDropdownChange = (e, value) => {
    let districtData = null;
    if (!isNull(value)) {
      setStateName(value.name);
      districtData = getDistrctData(value.name);
    } else {
      setStateName("Kerala");
      districtData = getDistrctData("Kerala");
    }
    let districtWiseData = {
      heading: [
        "District Name",
        "Active Cases",
        "Confirmed Cases",
        "Recovered Cases",
        "Deceased",
      ],
      data: districtData,
    };
    setStateDataDistrictWise(districtWiseData);
  };

  useEffect(() => {
    props.getDataCovid();
    props.getDataVaccine();
    props.getDataStateWise();
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    let districtData = indiaStateWiseData && getDistrctData("Kerala");
    let districtWiseData = {
      heading: [
        "District Name",
        "Active Cases",
        "Confirmed Cases",
        "Recovered Cases",
        "Deceased",
      ],
      data: districtData,
    };
    setStateDataDistrictWise(districtWiseData);
  }, [indiaStateWiseData]);
  return (
    <div>
      <SubHeader
        heading={`${stateName} State`}
        lastUpdated={lastRefreshed}
      ></SubHeader>
      <BodyWrapper id="home-container">
        {isLoadingVaccine && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}

        <div class="container">
          <div class="row d-flex justify-content-end">
            {!isLoadingVaccine && (
              <AutoCompletWrapper
                id="combo-box-demo"
                options={stateNameList}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="State List"
                    variant="outlined"
                  />
                )}
                onChange={setDropdownChange}
              />
            )}
          </div>
          <div class="row ">
            {cardData &&
              !isLoadingVaccine &&
              cardData.map((value, index) => {
                return (
                  <div class="col-xl-6 col-md-6 col-sm-12">
                    <DataCard data={value} key={`datacard${index}`}></DataCard>
                  </div>
                );
              })}
          </div>
        </div>

        <div class="container">
          <div class="row d-flex align-content-center justify-content-center">
            <HeadingWrapper>{`State Wise Report`}</HeadingWrapper>
          </div>
          <div class="row">
            {stateDataDistrictWise && (
              <DataTable data={stateDataDistrictWise} />
            )}
          </div>
        </div>
      </BodyWrapper>
    </div>
  );
};

export default State;

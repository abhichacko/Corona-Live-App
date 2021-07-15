import React, { useState, useEffect } from "react";
import { isNull, get } from "lodash";
import DataCard from "../DataCard/DataCard";
import SubHeader from "../SubHeader/SubHeader";
import { BodyWrapper } from "../Home/Home.styled";
import TextField from "@material-ui/core/TextField";
import { AutoCompletWrapper } from "./State.styled";

const State = (props) => {
  let [stateName, setStateName] = useState("Kerala");
  let { stateWiseSummary, lastRefreshed } = props;

  let stateData = !isNull(stateWiseSummary)
    ? stateWiseSummary.find((value) => value.loc === stateName)
    : null;
  console.log(stateName, "stateName");
  console.log(stateWiseSummary, "summary");
  console.log(stateData, "stateData");
  let activeCases =
    get(stateData, "totalConfirmed", "000") -
    (get(stateData, "discharged", "000") + get(stateData, "deaths", "000"));
  let cardData = [
    {
      heading: "Total Confirmed",
      number: get(stateData, "totalConfirmed", "000"),
      color: "tan",
    },
    {
      heading: "Recovered",
      number: get(stateData, "discharged", "000"),
      color: "lightgreen",
    },
    {
      heading: "Active Cases",
      number: activeCases,
      color: "gold",
    },
    {
      heading: "Total Death",
      number: get(stateData, "deaths", "000"),
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

  const setDropdownChange = (e, value) => {
    if (!isNull(value)) setStateName(value.name);
    else {
      setStateName("Kerala");
    }
    console.log(value, "value");
  };
  useEffect(() => {
    props.getDataCovid();
    props.getDataVaccine();
  }, []);

  return (
    <div>
      <SubHeader
        heading={`${stateName} State`}
        lastUpdated={lastRefreshed}
      ></SubHeader>
      <BodyWrapper id="home-container">
        <div class="row d-flex justify-content-end">
          <AutoCompletWrapper
            id="combo-box-demo"
            options={stateNameList}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="State List" variant="outlined" />
            )}
            onChange={setDropdownChange}
          />
        </div>
        <div class="row ">
          {cardData.map((value, index) => {
            return (
              <div class="col-xl-6 col-md-6 col-sm-12">
                <DataCard data={value} key={`datacard${index}`}></DataCard>
              </div>
            );
          })}
        </div>
      </BodyWrapper>
    </div>
  );
};

export default State;

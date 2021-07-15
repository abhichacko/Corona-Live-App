import React, { useEffect } from "react";
import { isNull, get } from "lodash";
import DataCard from "../DataCard/DataCard";
import Loader from "../Loader/Loader";
import SubHeader from "../SubHeader/SubHeader";
import { BodyWrapper, LoaderWrapper } from "./Home.styled";

const Home = (props) => {
  let { indiaVaccineDataSeries } = props;
  let vaccineDataLatest = !isNull(indiaVaccineDataSeries)
    ? indiaVaccineDataSeries[indiaVaccineDataSeries.length - 1]
    : null;
  let summaryActive =
    get(props.indiaSummaryToday, "total", "000") -
    get(props.indiaSummaryToday, "discharged", "000");
  let data = [
    {
      heading: "Total Confirmed",
      number: get(props.indiaSummaryToday, "total", "000"),
      color: "tan",
    },
    {
      heading: "Recovered",
      number: get(props.indiaSummaryToday, "discharged", "000"),
      color: "lightgreen",
    },
    {
      heading: "Active Cases",
      number: summaryActive,
      color: "gold",
    },
    {
      heading: "Total Death",
      number: get(props.indiaSummaryToday, "deaths", "000"),
      color: "crimson",
    },
    {
      heading: "Vaccinated Dose 1",
      number: get(vaccineDataLatest, "firstdoseadministered", "000"),
      color: "limegreen",
    },
    {
      heading: "Vaccinated Dose 2",
      number: get(vaccineDataLatest, "seconddoseadministered", "000"),
      color: "darkgrey",
    },
  ];

  useEffect(() => {
    props.getDataCovid();
    props.getDataVaccine();
  }, []);
  return (
    <div>
      {props.isLoading && (
        <LoaderWrapper>
          <Loader></Loader>
        </LoaderWrapper>
      )}
      {!props.isLoading && (
        <>
          <SubHeader
            heading={"India"}
            lastUpdated={props.lastRefreshed}
          ></SubHeader>
          <BodyWrapper id="home-container">
            <div class="row ">
              {data.map((value, index) => {
                return (
                  <div class="col-xl-4 col-md-6 col-sm-12">
                    <DataCard data={value} key={`datacard${index}`}></DataCard>
                  </div>
                );
              })}
            </div>
          </BodyWrapper>
        </>
      )}
    </div>
  );
};

export default Home;

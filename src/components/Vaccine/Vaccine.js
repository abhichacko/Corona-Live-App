import React, { useState, useEffect } from "react";
import { get, isNull } from "lodash";
import SubHeader from "../SubHeader/SubHeader";
import { BodyWrapper, LoaderWrapper } from "../Home/Home.styled";
import DataCard from "../DataCard/DataCard";
const Vaccine = (props) => {
  const { lastRefreshed, indiaVaccineDataSeries, isLoadingVaccine } = props;
  console.log(indiaVaccineDataSeries, "vaccine series");
  let lastDayVaccineData = null;
  let cardData = [];
  if (!isNull(indiaVaccineDataSeries)) {
    lastDayVaccineData =
      indiaVaccineDataSeries[indiaVaccineDataSeries.length - 1];
    cardData = [
      {
        heading: "Total Doses Administered",
        number: get(lastDayVaccineData, "totaldosesadministered", "0"),
        color: "tan",
      },
      {
        heading: "1st Dose Administered",
        number: get(lastDayVaccineData, "firstdoseadministered", "0"),
        color: "lightgreen",
      },
      {
        heading: "2nd Dose Administered",
        number: get(lastDayVaccineData, "seconddoseadministered", "0"),
        color: "gold",
      },
      {
        heading: "45+ Age 2nd Dose",
        number: get(lastDayVaccineData, "over45years2nddose", "0"),
        color: "limegreen",
      },
      {
        heading: "60+ Age 2nd Dose ",
        number: get(lastDayVaccineData, "over60years2nddose", "0"),
        color: "darkgrey",
      },
      {
        heading: "Health Workers 2nd Dose",
        number: get(
          lastDayVaccineData,
          "healthcareworkersvaccinated2nddose",
          "0"
        ),
        color: "limegreen",
      },
    ];
  }

  useEffect(() => {
    props.getDataCovid();
    props.getDataVaccine();
  }, []);

  return (
    <div>
      <SubHeader
        heading={"Vaccination Status"}
        lastUpdated={lastRefreshed}
      ></SubHeader>
      <BodyWrapper>
        <div class="container">
          <div class="row">
            {!isLoadingVaccine &&
              cardData &&
              cardData.map((value) => {
                return (
                  <div class="col-lg-4 col-md-6 col-sm-12">
                    <DataCard data={value}></DataCard>
                  </div>
                );
              })}
          </div>
        </div>
      </BodyWrapper>
    </div>
  );
};

export default Vaccine;

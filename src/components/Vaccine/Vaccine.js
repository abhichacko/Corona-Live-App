import React, { useEffect } from "react";
import { get, isNull } from "lodash";
import SubHeader from "../SubHeader/SubHeader";
import { BodyWrapper, LoaderWrapper } from "../Home/Home.styled";
import { HeadingWrapper } from "../State/State.styled";
import DataCard from "../DataCard/DataCard";
import { Bar } from "react-chartjs-2";
import Loader from "../Loader/Loader";
import { GraphContainer } from "../Home/Home.styled";

const Vaccine = (props) => {
  const {
    lastRefreshed,
    vaccineDataForChart,
    isLoadingVaccine,
    lastDayVaccineData,
  } = props;

  let cardData = [];
  if (!isNull(lastDayVaccineData)) {
    cardData = [
      {
        heading: "Total Doses Administered (1st + 2nd)",
        number: get(lastDayVaccineData, "totaldosesadministered", "0"),
        color: "darkgrey",
      },
      {
        heading: "Total 1st Dose Administered",
        number: get(lastDayVaccineData, "firstdoseadministered", "0"),
        color: "limegreen",
      },
      {
        heading: "Total 2nd Dose Administered",
        number: get(lastDayVaccineData, "seconddoseadministered", "0"),
        color: "darkgrey",
      },
      {
        heading: "45+ Age Citizens 2nd Dose ",
        number: get(lastDayVaccineData, "over45years2nddose", "0"),
        color: "limegreen",
      },
      {
        heading: "60+ Age Citizens 2nd Dose ",
        number: get(lastDayVaccineData, "over60years2nddose", "0"),
        color: "darkgrey",
      },
      {
        heading: "Health Workers 2nd Dose Adminstered",
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
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <SubHeader
        heading={"India Vaccination Status"}
        lastUpdated={lastRefreshed}
      ></SubHeader>
      <BodyWrapper>
        {isLoadingVaccine && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        <div class="container">
          <div class="row">
            {!isLoadingVaccine &&
              cardData &&
              cardData.map((value, index) => {
                return (
                  <div class="col-lg-4 col-md-6 col-sm-12">
                    <DataCard
                      data={value}
                      key={`datacard-vaccine-${index}`}
                    ></DataCard>
                  </div>
                );
              })}
          </div>
        </div>
        <div class="container">
          <div class="row d-flex flex-column align-content-center justify-content-center">
            <HeadingWrapper>{`Last ${get(
              vaccineDataForChart,
              "days",
              0
            )} Days Vaccination Status`}</HeadingWrapper>
          </div>
          <GraphContainer class="row">
            <Bar
              data={vaccineDataForChart}
              options={{ maintainAspectRatio: false }}
            />
          </GraphContainer>
        </div>
      </BodyWrapper>
    </div>
  );
};

export default Vaccine;

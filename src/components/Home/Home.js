import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { isNull, get } from "lodash";
import DataCard from "../DataCard/DataCard";
import Loader from "../Loader/Loader";
import SubHeader from "../SubHeader/SubHeader";
import { BodyWrapper, LoaderWrapper, HeadingWrapper } from "./Home.styled";
import DataTable from "../DataTable/DataTable";
import { theme } from "../../styles/theme";

const Home = (props) => {
  let { indiaVaccineDataSeries, stateWiseTableData, indiaCaseLastThirtyDays } =
    props;

  let vaccineDataLatest = !isNull(indiaVaccineDataSeries)
    ? indiaVaccineDataSeries[indiaVaccineDataSeries.length - 1]
    : null;
  let summaryActive =
    get(props.indiaSummaryToday, "total", "0") -
    get(props.indiaSummaryToday, "discharged", "0");
  let data = [
    {
      heading: "Total Confirmed",
      number: get(props.indiaSummaryToday, "total", "0"),
      color: "tan",
    },
    {
      heading: "Recovered",
      number: get(props.indiaSummaryToday, "discharged", "0"),
      color: "lightgreen",
    },
    {
      heading: "Active Cases",
      number: summaryActive,
      color: "gold",
    },
    {
      heading: "Total Death",
      number: get(props.indiaSummaryToday, "deaths", "0"),
      color: "crimson",
    },
    {
      heading: "Vaccinated Dose 1",
      number: get(vaccineDataLatest, "firstdoseadministered", "0"),
      color: "limegreen",
    },
    {
      heading: "Vaccinated Dose 2",
      number: get(vaccineDataLatest, "seconddoseadministered", "0"),
      color: "darkgrey",
    },
  ];
  const getLineChartData = () => {
    let lineChartData = [];
    if (!isNull(indiaCaseLastThirtyDays)) {
      let labels = [];
      let dailyConfirmdeData = [];
      let dailyRecoveredData = [];
      let dailyDiseasedData = [];

      Object.keys(indiaCaseLastThirtyDays).forEach((value) => {
        labels.push(get(indiaCaseLastThirtyDays[value], "date", 0));
        dailyConfirmdeData.push(
          get(indiaCaseLastThirtyDays[value], "dailyconfirmed", 0)
        );
        dailyRecoveredData.push(
          get(indiaCaseLastThirtyDays[value], "dailyrecovered", 0)
        );
        dailyDiseasedData.push(
          get(indiaCaseLastThirtyDays[value], "dailydeceased", 0)
        );
      });
      lineChartData = {
        labels: labels,
        datasets: [
          {
            label: "Daily Confirmed Cases",
            data: dailyConfirmdeData,
            fill: false,
            borderColor: theme.color.orange,
          },
          {
            label: "Daily Recovered Cases",
            data: dailyRecoveredData,
            fill: false,
            borderColor: theme.color.green,
          },
          {
            label: "Daily Diseased Cases",
            data: dailyDiseasedData,
            fill: false,
            borderColor: theme.color.red,
          },
        ],
      };
    }

    return lineChartData;
  };

  useEffect(() => {
    props.getDataCovid();
    props.getDataVaccine();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
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
            <div class="container">
              <div class="row ">
                {data.map((value, index) => {
                  return (
                    <div
                      class="col-xl-4 col-md-6 col-sm-12"
                      key={`datacard-div-${index}`}
                    >
                      <DataCard
                        data={value}
                        key={`datacard-${index}`}
                      ></DataCard>
                    </div>
                  );
                })}
              </div>
            </div>

            <div class="row d-flex align-content-center justify-content-center">
              <HeadingWrapper>{`Last 30 Days Report`}</HeadingWrapper>
            </div>
            <div class="container">
              <div class="row">
                <Line data={getLineChartData()}></Line>
              </div>
            </div>
            <div class="container">
              <div class="row d-flex align-content-center justify-content-center">
                <HeadingWrapper>{`State Wise Report`}</HeadingWrapper>
              </div>

              <div class="row">
                {stateWiseTableData && <DataTable data={stateWiseTableData} />}
              </div>
            </div>
          </BodyWrapper>
        </>
      )}
    </div>
  );
};

export default Home;

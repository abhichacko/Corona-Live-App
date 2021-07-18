import Home from "./Home";
import { connect } from "react-redux";
import { getCovidData, getVaccineData } from "../../Actions/actions";
import { get, isNull, takeRight } from "lodash";

const mapStateToProps = (state, ownProps) => {
  let {
    isLoading,
    indiaSummaryToday,
    lastRefreshed,
    indiaVaccineDataSeries,
    stateWiseSummary,
    indiaCaseSeries,
  } = state;
  console.log(indiaCaseSeries, "series");
  let indiaCaseLastThirtyDays = [];
  if (!isNull(indiaCaseSeries)) {
    console.log(indiaCaseSeries.length, "length");

    let keysLastThirty = takeRight(Object.keys(indiaCaseSeries), 30);
    keysLastThirty.forEach((value) => {
      indiaCaseLastThirtyDays.push(get(indiaCaseSeries, value, null));
    });
  }

  let data = [];
  console.log(stateWiseSummary);
  stateWiseSummary &&
    Object.keys(stateWiseSummary).forEach((value) => {
      data.push([
        get(stateWiseSummary[value], "loc", "-"),
        get(stateWiseSummary[value], "totalConfirmed", 0) -
          (get(stateWiseSummary[value], "discharged", 0) +
            get(stateWiseSummary[value], "deaths", 0)),
        get(stateWiseSummary[value], "totalConfirmed", 0),
        get(stateWiseSummary[value], "discharged", 0),
        get(stateWiseSummary[value], "deaths", 0),
      ]);
    });
  let stateWiseTableData = {
    heading: [
      "State Name",
      "Active Cases",
      "Confirmed Cases",
      "Recovered Cases",
      "Deaths",
    ],
    data: data,
  };

  return {
    isLoading,
    indiaSummaryToday,
    lastRefreshed,
    indiaVaccineDataSeries,
    stateWiseTableData,
    indiaCaseLastThirtyDays,
    ownProps,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDataCovid: () => getCovidData(),
    getDataVaccine: () => getVaccineData(),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

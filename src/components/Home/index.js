import Home from "./Home";
import { connect } from "react-redux";
import { getCovidData, getVaccineData } from "../../Actions/actions";
import { get } from "lodash";

const mapStateToProps = (state, ownProps) => {
  let {
    isLoading,
    indiaSummaryToday,
    lastRefreshed,
    indiaVaccineDataSeries,
    stateWiseSummary,
  } = state;
  let data = [];
  console.log(stateWiseSummary);
  stateWiseSummary &&
    Object.keys(stateWiseSummary).forEach((value) => {
      console.log(value, "value****");
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

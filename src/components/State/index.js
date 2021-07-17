import State from "./State";
import { get } from "lodash";
import { connect } from "react-redux";
import {
  getCovidData,
  getVaccineData,
  getStateWiseData,
} from "../../Actions/actions";

export const mapStateToProps = (state, ownProps) => {
  let stateWiseSummary = get(state, "stateWiseSummary", null);
  let isLoadingVaccine = get(state, "isLoadingVaccine", false);
  let lastRefreshed = get(state, "lastRefreshed", null);
  let isLoadingStateWise = get(state, "isLoadingStateWise", false);
  let indiaStateWiseData = get(state, "indiaStateWiseData", null);

  return {
    stateWiseSummary,
    isLoadingVaccine,
    lastRefreshed,
    isLoadingStateWise,
    indiaStateWiseData,
    ...ownProps,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDataCovid: () => getCovidData(),
    getDataVaccine: () => getVaccineData(),
    getDataStateWise: () => getStateWiseData(),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(State);

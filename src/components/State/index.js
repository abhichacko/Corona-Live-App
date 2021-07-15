import State from "./State";
import { get } from "lodash";
import { connect } from "react-redux";
import { getCovidData, getVaccineData } from "../../Actions/actions";

export const mapStateToProps = (state, ownProps) => {
  let stateWiseSummary = get(state, "stateWiseSummary", null);
  let isLoading = get(state, "isLoading", false);
  let lastRefreshed = get(state, "lastRefreshed", null);
  return {
    stateWiseSummary,
    isLoading,
    lastRefreshed,
    ...ownProps,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDataCovid: () => getCovidData(),
    getDataVaccine: () => getVaccineData(),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(State);

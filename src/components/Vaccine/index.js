import Vaccine from "./Vaccine";
import { connect } from "react-redux";
import { get } from "lodash";
import { getCovidData, getVaccineData } from "../../Actions/actions";

const mapStateToProps = (state, ownProps) => {
  let isLoadingVaccine = get(state, "isLoadingVaccine", false);
  let lastRefreshed = get(state, "lastRefreshed", "");
  const indiaVaccineDataSeries = get(state, "indiaVaccineDataSeries", null);
  return {
    isLoadingVaccine,
    lastRefreshed,
    indiaVaccineDataSeries,
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataCovid: () => getCovidData(),
    getDataVaccine: () => getVaccineData(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vaccine);

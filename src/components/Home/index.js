import Home from "./Home";
import { connect } from "react-redux";
import { getCovidData, getVaccineData } from "../../Actions/actions";

const mapStateToProps = (state, ownProps) => {
  let { isLoading, indiaSummaryToday, lastRefreshed, indiaVaccineDataSeries } =
    state;

  return {
    isLoading,
    indiaSummaryToday,
    lastRefreshed,
    indiaVaccineDataSeries,
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

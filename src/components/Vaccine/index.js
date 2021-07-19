import Vaccine from "./Vaccine";
import { connect } from "react-redux";
import { get, isNull, takeRight } from "lodash";
import { getCovidData, getVaccineData } from "../../Actions/actions";
import { theme } from "../../styles/theme";

const mapStateToProps = (state, ownProps) => {
  let isLoadingVaccine = get(state, "isLoadingVaccine", false);
  let lastRefreshed = get(state, "lastRefreshed", "");
  const indiaVaccineDataSeries = get(state, "indiaVaccineDataSeries", null);

  let lastDaysVaccineData = [];
  let lastDaysVaccineDataDate = [];
  let lastDaysVaccineData1stDose = [];
  let lastDaysVaccineData2ndDose = [];
  let lastDayVaccineData = null;
  if (!isNull(indiaVaccineDataSeries)) {
    lastDayVaccineData =
      indiaVaccineDataSeries[indiaVaccineDataSeries.length - 1];
    let lastDaysKeys = takeRight(Object.keys(indiaVaccineDataSeries), 11);

    for (let item of lastDaysKeys)
      lastDaysVaccineData.push(get(indiaVaccineDataSeries, item, null));
    for (let index = 0; index < lastDaysVaccineData.length - 1; ++index) {
      let firstDose =
        get(lastDaysVaccineData[index + 1], "firstdoseadministered", 0) -
        get(lastDaysVaccineData[index], "firstdoseadministered", 0);
      let secondDose =
        get(lastDaysVaccineData[index + 1], "seconddoseadministered", 0) -
        get(lastDaysVaccineData[index], "seconddoseadministered", 0);

      let labelDate = get(lastDaysVaccineData[index], "testedasof", 0);
      lastDaysVaccineDataDate.push(labelDate);
      lastDaysVaccineData1stDose.push(firstDose);
      lastDaysVaccineData2ndDose.push(secondDose);
    }
  }

  const vaccineDataForChart = {
    labels: lastDaysVaccineDataDate,
    datasets: [
      {
        label: "1st Dose",
        backgroundColor: theme.color.green,
        hoverBackgroundColor: theme.color.lightGreen,
        data: lastDaysVaccineData1stDose,
      },
      {
        label: "2nd Dose",
        backgroundColor: theme.color.greenTan,
        hoverBackgroundColor: theme.color.greenTanHard,
        data: lastDaysVaccineData2ndDose,
      },
    ],
    days: lastDaysVaccineDataDate.length,
  };
  return {
    isLoadingVaccine,
    lastRefreshed,
    lastDayVaccineData,
    vaccineDataForChart,
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

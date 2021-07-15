import { get, isNull } from "lodash";
import axios from "axios";
import { API_URL } from "../Constants/ApiUrl";
import { ACTION_TYPES } from "../Constants/ActionTypes";
import store from "../Store/store";

let { dispatch } = store;
export const getCovidData = async () => {
  dispatch({
    type: ACTION_TYPES.GET_COVID_DATA_PENDING,
    payload: {
      isLoading: true,
      indiaSummaryToday: null,
      stateWiseSummary: null,
    },
  });
  await axios
    .get(API_URL.GET_COVID_DATA)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_COVID_DATA_SUCCESSFUL,
        payload: {
          isLoading: false,
          indiaSummaryToday: get(response.data, "data.summary", null),
          lastRefreshed: get(response.data, "lastRefreshed", null),
          stateWiseSummary: get(response.data, "data.regional", null),
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getVaccineData = async () => {
  dispatch({
    type: ACTION_TYPES.GET_VACCINE_DATA_PENDING,
    payload: {
      isLoading: true,
      indiaVaccineDataSeries: null,
      indiaCaseSeries: null,
    },
  });
  await axios
    .get(API_URL.GET_VACCINE_DATA)
    .then((response) => {
      console.log(response);

      dispatch({
        type: ACTION_TYPES.GET_VACCINE_DATA_SUCCESSFUL,
        payload: {
          isLoading: false,
          indiaVaccineDataSeries: get(response, "data.tested", null),
          indiaCaseSeries: get(response, "data.cases_time_series", null),
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

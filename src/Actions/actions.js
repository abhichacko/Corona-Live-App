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
          isErrorOccured: false,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: ACTION_TYPES.GET_COVID_DATA_FAILURE,
        payload: {
          isLoading: false,
          indiaSummaryToday: null,
          lastRefreshed: null,
          stateWiseSummary: null,
          isErrorOccured: true,
        },
      });
    });
};

export const getVaccineData = async () => {
  dispatch({
    type: ACTION_TYPES.GET_VACCINE_DATA_PENDING,
    payload: {
      isLoadingVaccine: true,
      indiaVaccineDataSeries: null,
      indiaCaseSeries: null,
    },
  });
  await axios
    .get(API_URL.GET_VACCINE_DATA)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_VACCINE_DATA_SUCCESSFUL,
        payload: {
          isLoadingVaccine: false,
          indiaVaccineDataSeries: get(response, "data.tested", null),
          indiaCaseSeries: get(response, "data.cases_time_series", null),
          isErrorOccured: false,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: ACTION_TYPES.GET_VACCINE_DATA_FAILURE,
        payload: {
          isLoadingVaccine: false,
          indiaVaccineDataSeries: null,
          indiaCaseSeries: null,
          isErrorOccured: true,
        },
      });
    });
};

export const getStateWiseData = async () => {
  dispatch({
    type: ACTION_TYPES.GET_STATEWISE_DATA_PENDING,
    payload: {
      isLoadingStateWise: true,
      indiaStateWiseData: null,
    },
  });
  await axios
    .get(API_URL.GET_STATWISE_DATA)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_STATE_DATA_SUCCESSFUL,
        payload: {
          isLoadingStateWise: false,
          indiaStateWiseData: get(response, "data", null),
          isErrorOccured: false,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: ACTION_TYPES.GET_STATEWISE_DATA_FAILURE,
        payload: {
          isLoadingStateWise: false,
          indiaStateWiseData: null,
          isErrorOccured: true,
        },
      });
    });
};

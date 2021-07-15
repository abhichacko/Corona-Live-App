import { ACTION_TYPES } from "../Constants/ActionTypes";

const initialState = {
  name: "abhilash",
  indiaVaccineDataSeries: null,
  indiaSummaryToday: null,
  indiaCaseSeries: null,
  stateWiseSummary: null,
  isLoading: false,
  lastRefreshed: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_COVID_DATA_PENDING:
    case ACTION_TYPES.GET_COVID_DATA_SUCCESSFUL:
    case ACTION_TYPES.GET_COVID_DATA_FAILURE:
      return { ...state, ...action.payload };
    case ACTION_TYPES.GET_VACCINE_DATA_PENDING:
    case ACTION_TYPES.GET_VACCINE_DATA_FAILURE:
    case ACTION_TYPES.GET_VACCINE_DATA_SUCCESSFUL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;

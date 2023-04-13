import { createSlice } from "@reduxjs/toolkit";

interface CsvDataState {
  No:                number[];
  InspDate:          number[];
  RWT:               number[];
  MeasurementStatus: string[];
  LT:                number[];
  ST:                number[];
  NWT:               number[];
  CONC_T_alert:      number[];
  MAWT_T_anomaly:    number[];
  T1:                number[];
  T2:                number[];
  T3:                number[];
  T4:                number[];
  Report:            string[];
  TakenBy:           number[];
  Comments:          number[];
  data:                 any[];

}

const initialState: CsvDataState = {
  No:                 [],
  InspDate:           [],
  RWT:                [],
  MeasurementStatus:  [],
  LT:                 [],
  ST:                 [],
  NWT:                [],
  CONC_T_alert:       [],
  MAWT_T_anomaly:     [],
  T1:                 [],
  T2:                 [],
  T3:                 [],
  T4:                 [],
  Report:             [],
  TakenBy:            [],
  Comments:           [],
  data:               [],

};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    setData: (state, action) => {
        state.No = action.payload.No;
        state.InspDate = action.payload.InspDate;
        state.RWT = action.payload.RWT;
        state.MeasurementStatus = action.payload.MeasurementStatus;
        state.LT = action.payload.LT;
        state.ST = action.payload.ST;
        state.NWT = action.payload.NWT;
        state.CONC_T_alert = action.payload.CONC_T_alert;
        state.MAWT_T_anomaly = action.payload.MAWT_T_anomaly;
        state.T1 = action.payload.T1;
        state.T2 = action.payload.T2;
        state.T3 = action.payload.T3;
        state.T4 = action.payload.T4;
      },
      setAllData: (state, action) => {
        state.data = action.payload
      }
  },
  extraReducers: {},
});

export const { setData, setAllData } = chartSlice.actions;
export default chartSlice.reducer;

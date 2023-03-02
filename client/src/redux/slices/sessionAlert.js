import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const sessionAlertSlice = createSlice({
  name: "sessionAlert",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAlert } = sessionAlertSlice.actions;
export default sessionAlertSlice.reducer;

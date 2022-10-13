import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
};


const timerStateSlice = createSlice({
    name: "timerState",
    initialState,
    reducers: {
        timerOnOff: (state, action)=>{state.value = action.payload}
    }
})

export const {timerOnOff} = timerStateSlice.actions;
export default timerStateSlice.reducer;
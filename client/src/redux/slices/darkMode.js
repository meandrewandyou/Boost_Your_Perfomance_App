import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
};


const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        changeMode: (state)=>{state.value = !state.value}
    }
})

export const {changeMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/who.json";

// create slice
const whoSlice = createSlice({
 name: "who",               // name the reducer
 initialState: whoArray     // initialize the reducer
});

export default whoSlice.reducer;
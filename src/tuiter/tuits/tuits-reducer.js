import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

// create reducer with initial data
const tuitsSlice = createSlice({
    name: "tuits",
    initialState: tuits
});

export default tuitsSlice.reducer;
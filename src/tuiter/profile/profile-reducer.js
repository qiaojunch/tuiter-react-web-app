import { createSlice } from "@reduxjs/toolkit";
import userProfile from "./profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: userProfile
})

export default profileSlice.reducer;
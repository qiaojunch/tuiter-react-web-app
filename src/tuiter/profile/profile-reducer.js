import { createSlice } from "@reduxjs/toolkit";
import userProfile from "./profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: userProfile,
    reducers: {
        updateProfile(state, action) {
            alert(action.payload.bio)
            state = {...state, ...action.payload}
            console.log(state)
        },

    }
})


export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import userProfile from "../profile/profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: userProfile,
    reducers: {
        updateProfile(state, action) {
            state = {...state, ...action.payload}
            return state;   // need to return the new state 
        },

    }
})

export default profileSlice.reducer;
export const {updateProfile} = profileSlice.actions;

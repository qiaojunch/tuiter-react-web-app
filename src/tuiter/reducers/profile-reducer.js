import { createSlice } from "@reduxjs/toolkit";
import userProfile from "../profile/profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: userProfile,
    reducers: {
        updateProfile(state, action) {
            console.log(action.payload)
            state = {...state, ...action.payload}
            //console.log(state)   // state is changed, but profile doesn't change
        },

    }
})


export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
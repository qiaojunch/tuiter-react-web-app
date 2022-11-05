import { createSlice } from "@reduxjs/toolkit";
import tuits from "../tuits/tuits.json";

// create an object that represents the current logged-in user
const currentUser = {
    userName: "NASA",
    handle: "@nasa",
    image: "nasa-logo.png",
};

// create a template tuit object
const templateTuit = {
    ...currentUser,
    topic: "Space",
    time: "2h",
    liked: false,
    replies: 0,
    retuits: 0,
    likes: 0,
};

// create reducer with initial data
const tuitsSlice = createSlice({
    name: "tuits",
    initialState: tuits,
    reducers : {
        deleteTuit(state, action) {
            const index = state.findIndex(tuit =>
                tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime()
            })
        }
    }
});

export default tuitsSlice.reducer;
export const {createTuit, deleteTuit} = tuitsSlice.actions;
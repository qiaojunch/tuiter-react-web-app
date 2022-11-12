import { createSlice } from "@reduxjs/toolkit";
import { createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitChunk } from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

// create reducer with initial data
const tuitsSlice = createSlice({
    name: "tuitsData",
    initialState,          // shortcut if type and value have the same name 
    extraReducers: {       // define async reducers
        [findTuitsThunk.pending]: (state) => { 
                state.loading = true;
                state.tuits = [];
        },
        [findTuitsThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.tuits = action.payload;
        },
        [findTuitsThunk.rejected]: (state) => {
            state.loading = true;
        },
        [deleteTuitThunk.fulfilled]: (state, { payload }) => {   // deconstruct payload from action contain tid
            state.loading = false;
            state.tuits = state.tuits.filter(t => t._id !== payload) 
        },
        [createTuitThunk.fulfilled]: (state, { payload }) => {   // payload contains newTuid
            state.loading = false;
            state.tuits.push(payload);
        },
        [updateTuitChunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            const tuitIndex = state.tuits.findIndex( t => t._id === payload._id );  // find the id of updated tuit
            state.tuits[tuitIndex] = {
                ...state.tuits[tuitIndex],    // copy the old tuit
                ...payload                    // update with payload data
            };
        }
    }

    // Old reducers will not be used anymore
    // reducers : {
    //     deleteTuit(state, action) {
    //         const index = state.findIndex(tuit =>
    //             tuit._id === action.payload);
    //         state.splice(index, 1);
    //     },
    //     createTuit(state, action) {
    //         state.unshift({
    //             ...action.payload,
    //             ...templateTuit,
    //             _id: (new Date()).getTime()
    //         })
    //     }
    // }
});

export default tuitsSlice.reducer;
export const {createTuit, deleteTuit} = tuitsSlice.actions;
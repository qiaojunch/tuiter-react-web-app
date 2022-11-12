import {createAsyncThunk} from "@reduxjs/toolkit"    //interact asynchronously with an HTTP server
import * as service from "./tuits-service"

// Wrap interact asynchronously with an HTTP server
// to store date retrieved from remote server into redux local store
// Note: can be used in tuit-list componenet to find tuits from server
export const findTuitsThunk = createAsyncThunk(
  "tuits/findTuits",                        // Type string: contains 3 redux states, pending, fulfilled, rejected
  async () => await service.findTuits()     // Call service method
)

export const deleteTuitThunk = createAsyncThunk(
  "tuits/deleteTuit",
  async (tid) => {
    await service.deleteTuit(tid)
    return tid       // return id to be used to remove tuit from store
  }
)

export const createTuitThunk = createAsyncThunk(
  "tuits/createTuit", 
  async (tuit) => {
    return await service.createTuit(tuit)  // await to retrieve the newTuit from server and return it
  }
)

export const updateTuitChunk = createAsyncThunk(
  "tuits/updateTuit",
  async (tuitUpdates) => {
    return await service.updateTuit(tuitUpdates)
  }
)
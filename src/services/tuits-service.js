import axios from 'axios';

// location of HTTP services
//const API_BASE = "https://tuiter-node-server-app-cs5610.herokuapp.com/api";

const API_BASE = process.env.REACT_APP_API_BASE;
//const TUITS_API = 'http://localhost:4000/api/tuits' || `${API_BASE}/tuits`;
const TUITS_API = "https://tuiter-node-server-app-bjm6.onrender.com";

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data 
}
export const findTuits  = async ()     => {
    const response = await axios.get(TUITS_API)   // send HTTP GET request to TUITS_API
    const tuits = response.data                   // extract JSON data from API
    return tuits     // be used in tuits-thunks
}
export const deleteTuit = async (tuitId) => {    
    const response = await axios.delete(`${TUITS_API}/${tuitId}`)  
    console.log(response.data)
    return response.data
}
export const updateTuit = async (tuit) => {
    const response = await axios.put(
        `${TUITS_API}/${tuit._id}`,         // send URL with tuitID to server
        tuit)                               // send data needed to be updated on server
    return response.data                             // server responses with updated tuit data
}
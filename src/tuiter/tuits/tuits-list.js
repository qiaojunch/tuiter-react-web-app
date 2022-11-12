import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";
import TuitItem from "./tuit-item";
// import tuitsArray from "./tuits.json";


const TuitsList = () => {
    const {tuits, loading} = useSelector( state => state.tuitsData)  // get tuitData from reducer
    const dispatch = useDispatch();
    // Call findTuitsThunk to get tuits and put it into reducer store so that we can 
    // extract tuits with selector and render tuits here
    useEffect( () => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <ul className="list-group">
        {
            loading && <li className="list-group-item">Loading</li>
        }
        {
            !loading && tuits.map( tuit => <TuitItem key={tuit._id} tuit={tuit} /> )
        }
        </ul>
    )
}

export default TuitsList;
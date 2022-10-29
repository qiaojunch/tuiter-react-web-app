import React from "react";
import TuitItem from "./tuit-item";
import tuitsArray from "./tuits.json";


const TuitsList = () => {
    return (
        <ul className="list-group">
        {
            tuitsArray.map( tuit => <TuitItem key={tuit._id} tuit={tuit} />)
        }
        </ul>
    )
}

export default TuitsList;
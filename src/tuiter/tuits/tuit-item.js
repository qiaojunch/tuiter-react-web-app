import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = ({
    tuit = {
        "_id": 999, 
        "topic": "Space", 
        "userName": "SpaceX",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "time": "2h",   
        "image": "tesla-logo.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"    
    }
}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));   // invoke deleteTuit service; if sucessfully deleted, we notify the reducer to remove the tuit on state
    }

    return (
        <li className="list-group-item border p-2">
            <div className="row">
                <div className="col-auto">
                    <img className="rounded-circle float-end" src={`/images/${tuit.image}`} width={60} />
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div>
                        {tuit.userName}<span> <i className="bi bi-patch-check-fill"></i> {tuit.handle}</span><i className="bi bi-dot"></i>{tuit.time}
                    </div>
                    {tuit.tuit}
                    <TuitStats tuit={tuit} />
                </div>
            </div>
        </li>
    );
}

export default TuitItem;
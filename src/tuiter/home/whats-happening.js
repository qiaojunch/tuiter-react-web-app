import React, { useState } from "react";
import { createTuit } from "../reducers/tuits-reducer";   // import reducer function
import { useDispatch } from "react-redux";             // import disaptch hook

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState("");
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        // create a new tuit
        const newTuit = {
            tuit: whatsHappening
        }
        // send tuit as action payload
        dispatch(createTuit(newTuit));
    }

    return (
        <div className="row">
            <div className="col-auto">
                <img src="/images/nasa-logo.png" width={70} />
            </div>
            <div className="col-10">
                <textarea value={whatsHappening} placeholder="What's happening?"
                    className="form-control border-0"
                    onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>
            </div>
            <div>
                <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                    onClick={tuitClickHandler}>Tuit</button>
            </div>
                <div className="text-primary fs-2">
                <i className="bi bi-card-image me-3"></i>
                <i className="bi bi-filetype-gif me-3"></i>
                <i className="bi bi-bar-chart me-3"></i>
                <i className="bi bi-emoji-smile me-3"></i>
                <i className="bi bi-geo-alt"></i>
            </div>
        </div>
    )
}

export default WhatsHappening;
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateProfile } from "../profile/profile-reducer";

const EditProfileComponent = () => {
    const user = useSelector(state => state.profile);
    let [fullName, setFullName] = useState(`${user.firstName} ${user.lastName}`);
    let [bio, setBio] = useState(user.bio);
    let [location, setLocation] = useState(user.location);
    let [website, setWebsite] = useState(user.website);
    let [dateOfBirth, setBOA] = useState(user.dateOfBirth);
    let [isEdittedBOA, setEdittedBOA] = useState(false);

    // useEffect(() => {
    //     setBio(user.bio)
    // }, [])

    // handle save button to update profile
    const dispatch = useDispatch();
    const saveProfileHandler = () => {
        console.log(user);
        dispatch(updateProfile({
            fullName, bio, location
        }));
    }

    // navigate back to profile
    const navigate = useNavigate();
    const navigateProfile = () => {
        navigate("/tuiter/profile");
    }

    return (
        <div>
        <pre>
            {JSON.stringify(user, null, 2)}
        </pre>

            <div className="row mb-2">
                <i className="col-1 bi bi-x-lg float-start"
                    onClick={navigateProfile}></i>
                <p className="col-9">Edite profile</p>
                <button 
                    className=" col-2 btn btn-dark btn-sm rounded-pill float-end"
                    onClick={() => {saveProfileHandler(user)}}>Save</button>
            </div>
            <div className="position-relative">
                <img src="/images/profile-banner.jpeg" width="100%" />
                <img className="rounded-circle translate-middle position-relative wd-profile-pos" src={`/images/${user.profilePicture}`} width={80} />
            </div>
            {/* Change Username */}
            <div className="form-floating mb-3">
                <textarea 
                    className="form-control" id="userNameTextarea" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}></textarea>
                <label htmlFor="userNameTextarea">Name</label>
            </div>
            {/* Change User Bio */}
            <div className="form-floating mb-3">
                <textarea 
                    className="form-control wb-height-100" id="bioTextarea" 
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}></textarea>
                <label htmlFor="bioTextarea">Bio</label>
            </div>
            {/* Change Location */}
            <div className="form-floating mb-3">
                <textarea 
                    className="form-control" id="locationTextarea"
                    value={location} 
                    onChange={(e) => {setLocation(e.target.value)}}></textarea>
                <label htmlFor="locationTextarea">Location</label>
            </div>
            {/* Change website */}
            <div className="form-floating mb-3">
                <textarea 
                    className="form-control" id="locationTextarea"
                    value={website}
                    onChange={(e) => {setWebsite(e.target.value)}}></textarea>
                <label htmlFor="locationTextarea">Website</label>
            </div>
            {/* Change DOB */}
            <div className="d-flex">
                <div className="">Birth date</div>
                <i className="bi bi-dot"></i>
                <button 
                    className="btn btn-link p-0"
                    onClick={() => setEdittedBOA(!isEdittedBOA)}>Edit</button>
            </div>
            {/* If BOA is being editted */}
            {
                isEdittedBOA && 
                <input 
                    value={dateOfBirth} 
                    onChange={(e) => {setBOA(e.target.value)}}></input>
            }
            {/* If BOA is not being editted */}
            {
                !isEdittedBOA && <label>{dateOfBirth}</label>
            }
            <br/>
            <br/>
            {/* Professional Setting */}
            <div>Switch to professional <i className="bi bi-chevron-right float-end"></i></div>
        </div>
    )
}

export default EditProfileComponent;
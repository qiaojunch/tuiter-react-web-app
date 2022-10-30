import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ProfileComponent = () => {
    const user = useSelector(state => state.profile);
    const navigate = useNavigate();

    // handle click and navigate to edit-profile route
    const navigateEditProfile = () => {
        navigate("editProfile");
    }

    return (
        <div>
            <div className="position-relative">
                <img src="/images/profile-banner.jpeg" width="100%" />
                <img className="rounded-circle translate-middle position-relative wd-profile-pos" src={`/images/${user.profilePicture}`} width={80} />
                <button 
                    onClick={navigateEditProfile}
                    className="btn btn-light rounded-pill border float-end mt-2">Edit profile</button>
            </div>
            <div>
                <h3 className="mb-0">{user.firstName} {user.lastName}</h3>
                <p className="text-secondary">{user.handle}</p>
                <p>{user.bio}</p>
            </div>
            <div className="d-flex justify-content-start">
                <div className="me-4"><i className="bi bi-geo-alt"></i> {user.location}</div>
                <div className="me-4"><i className="bi bi-balloon"></i>{user.dateOfBirth}</div>
                <div className="me-4"><i className="bi bi-calendar3"></i> {user.dateJoined}</div>
            </div>
            <div className="fw-semibold">
                <span className="text-secondary fw-normal">{user.followingCount}</span> Followers <span className="text-secondary fw-normal">{user.followersCount}</span> Followering
            </div>
        </div>
    )
}

export default ProfileComponent;
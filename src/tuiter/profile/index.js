import "./index.css";

const ProfileComponent = ({
    user =  {
        "firstName": "Jun",
        "lastName": "Chen",
        "handle": "@junChen",
        "profilePicture": "post-avatar.jpg",
        "bannerPicture": "sky.png",
        "bio": "Northeastern graduate student studying web development in Fall 2022! a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years.",
        "website": "youtube.com/webdevtv",
        "location": "Boston, MA",
        "dateOfBirth": "06/20/1995",
        "dateJoined":"4/2013",
        "followingCount": 550,
        "followersCount": 121
      }
}) => {
    return (
        <div>
            <div className="position-relative">
                <img src="/images/profile-banner.jpeg" width="100%" />
                <img className="rounded-circle translate-middle position-relative wd-profile-pos" src={`/images/${user.profilePicture}`} width={80} />
                <button className="btn btn-light rounded-pill border float-end mt-2">Edit profile</button>
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
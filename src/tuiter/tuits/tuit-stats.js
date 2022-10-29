
const TuitStats = ({tuit}) => {
    return (
        <div className="d-flex">
            <div className="flex-fill p-2"><i className="bi bi-chat"></i><span> {tuit.replies}</span></div>
            <div className="flex-fill p-2"><i className="bi bi-arrow-repeat"></i><span> {tuit.retuits}</span></div>
            <div className="flex-fill p-2"><i className={`${tuit.liked ? 'text-danger': ''} bi bi-heart-fill`}></i><span> {tuit.likes}</span></div>
            <div className="flex-fill p-2"><i className="bi bi-upload"></i></div>
        </div>
    )
}

export default TuitStats;
import React from 'react';

const PostListItem = (
    {
        item = {
            "avatar": "post-avatar.jpg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "postContent": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s!",
            "shareImage": "post1-img.jpeg",
            "shareTopic": "Lorem Ipsum is simply dummy text of the printing and typesetting",
            "shareContent": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            "commentNum": "123k",
            "shareNum": "4.5k",
            "likeNum": "23k"
        }
    }) => {
    return (
        <li className="list-group-item border p-2">
        <div className="row">
            <div className="col-2">
                <img className="rounded-circle" src={`/images/${item.avatar}`} width="100%"/>
            </div>
            <div className="col-10">
                <div>
                    <div>{item.userName}<i className="bi bi-patch-check-fill"></i><span className="text-secondary"> @{item.handle}</span><i className="bi bi-dot"></i>{item.time}</div>
                </div>
                <div>{item.postContent}</div>
                <div className="rounded border border mt-2">
                    <img className="rounded border-light border-bottom" src={`/images/${item.shareImage}`} width="100%"/>
                    <div className="p-2">
                        <div>{item.shareTopic}</div>
                        <div className="text-secondary">{item.shareContent}</div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="flex-fill p-2"><i className="bi bi-chat"></i><span> {item.commentNum}</span></div>
                    <div className="flex-fill p-2"><i className="bi bi-arrow-repeat"></i><span> {item.shareNum}</span></div>
                    <div className="flex-fill p-2"><i className="bi bi-heart"></i><span> {item.likeNum}</span></div>
                    <div className="flex-fill p-2"><i className="bi bi-upload"></i></div>
                </div>
            </div>
        </div>
    </li>
    )
}
export default PostListItem;
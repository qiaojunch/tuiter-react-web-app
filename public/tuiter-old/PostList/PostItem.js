

function PostItem(item) {
    return (`
        <li class="list-group-item bg-black">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" src=${item.avatar} width="100%"/>
                </div>
                <div class="col-10">
                    <div>
                        <div>${item.userName}<i class="fas fa-check-circle"></i><span class="text-secondary"> @${item.handle}</span> &middot ${item.time}</div>
                    </div>
                    <div>${item.postContent}</div>
                    <div class="rounded border border-light mt-2">
                        <img class="rounded border-light border-bottom" src=${item.shareImage} width="100%"/>
                        <div class="m-3">
                            <div>${item.shareTopic}</div>
                            <div class="text-secondary">${item.shareContent}</div>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="flex-fill p-2"><i class="fas fa-comment"></i><span> ${item.commentNum}</span></div>
                        <div class="flex-fill p-2"><i class="fas fa-retweet"></i><span> ${item.shareNum}</span></div>
                        <div class="flex-fill p-2"><i class="fas fa-heart"></i><span> ${item.likeNum}</span></div>
                        <div class="flex-fill p-2"><i class="fas fa-upload"></i></div>
                    </div>
                </div>
            </div>
        </li>
    `);
}

export default PostItem;
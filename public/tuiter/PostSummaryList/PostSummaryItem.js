
function PostSummaryList (post) {
  return (`
      <li class="wb-list-item list-group-item">
          <div class="row">
              <div class="col-10">
                  <div class="text-secondary">${post.topic}</div>
                  <div>${post.userName}<span> <i class="fas fa-check-circle"></i></span><span class="text-secondary"> - ${post.time}</span></div>
                  <div>${post.title}</div>
              </div>
              <div class="col-2 float-end pt-3">
                  <img class="rounded" src=${post.image} width="100%"/>
              </div>
          </div>
      </li>
  `)
}

export default PostSummaryList;
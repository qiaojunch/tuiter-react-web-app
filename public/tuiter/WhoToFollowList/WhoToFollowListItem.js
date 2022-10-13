
function WhoToFollowItem(who) {
  return (`
      <li class="list-group-item">
          <div>
            <img class="float-start rounded-circle me-1" src=${who.avatarIcon} width="17%"/>
            <button class="float-end btn btn-primary rounded-pill mt-1">Follow</button>
            <div class="fw-bold">${who.userName}<span> <i class="fas fa-check-circle"></i></span></div>
            <span>@${who.handle}</span>
          </div>
      </li>
  `)
}

export default WhoToFollowItem;

import PostSummaryList from "../PostSummaryListPublic/index.js";

const ExploreComponent = () => {
    return(`
      <div class="row">
                <!-- search field and cog -->
        <div class="col-10 position-relative">
            <span class="position-absolute mt-2 ms-2"><i class="fas fa-search"></i></span>
            <input class="wb-input form-control rounded-pill ps-5" placeholder="Search Tuiter"/>
        </div>
        <div class="col-2">
            <i class="fas fa-cog fa-lg mt-2"></i>
        </div>
      </div>
      <ul class="nav mb-2 nav-tabs mt-2">
                      <!-- tabs -->
        <li class="nav-item">
            <a class="wb-nav-bar-item nav-link active" href="#">For you</a>
        </li>
        <li class="nav-item">
            <a class="wb-nav-bar-item nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
            <a class="wb-nav-bar-item nav-link" href="#">COVID-19</a>
        </li>
        <li class="nav-item">
            <a class="wb-nav-bar-item nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
            <a class="wb-nav-bar-item nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
            <a class="wb-nav-bar-item wb-highlighted nav-link" href="#" tabindex="-1">Entertainment</a>
        </li>
      </ul>
                    <!-- image with overlaid text -->
      <div class="mb-2 position-relative">
          <img src="../../images/starship.jpg" width="100%"/>
          <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX's starship</h1>
      </div>
                    <!-- post summary list -->
      ${PostSummaryList()}
    `);
}
export default ExploreComponent;
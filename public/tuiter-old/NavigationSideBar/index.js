const NavigationSidebar = (active) => {
    var linkClass = "list-group-item";

    const home = active === "home" ? linkClass.concat(" ", "active") : linkClass;
    const explore = active === "explore" ? linkClass.concat(" ", "active") : linkClass;
    console.log(home);
    console.log(explore);

    return (`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a class=${home} href="../HomeScreen/index.html">
       <i class="fas fa-home float-start mt-1 me-1"></i><span class="d-none d-xl-block">Home</span></a>
     <a class=${explore} href="../ExploreScreen/index.html">
            <i class="fas fa-hashtag float-start mt-1 me-1"></i><span class="d-none d-xl-block">Explore</span></a>
     <a class="list-group-item" href="/">
            <i class="fas fa-bell float-start mt-1 me-1"></i><span class="d-none d-xl-block">Notifications</span></a>
     <a class="list-group-item" href="/">
            <i class="fas fa-envelope float-start mt-1 me-1"></i><span class="d-none d-xl-block">Messages</span></a>
     <a class="list-group-item" href="/">
            <i class="fas fa-bookmark float-start mt-1 me-1"></i><span class="d-none d-xl-block">Bookmarks</span></a>
     <a class="list-group-item" href="/">
            <i class="fas fa-list float-start mt-1 me-1"></i><span class="d-none d-xl-block">Lists</span></a>
     <a class="list-group-item" href="/">
            <i class="fas fa-user float-start mt-1 me-1"></i><span class="d-none d-xl-block">Profile</span></a>
     <a class="list-group-item" href="/">
            <i class="fas fa-comment-dots float-start mt-1 me-1"></i><span class="d-none d-xl-block">More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

export default NavigationSidebar;

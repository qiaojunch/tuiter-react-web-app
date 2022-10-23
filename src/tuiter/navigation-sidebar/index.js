import React from 'react';
import {Link} from "react-router-dom";     // add href link
import {useLocation} from "react-router";  // query state of router

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];  // get the current router pathname

    return (
        <div className='list-group'>
        <a className='list-group-item'><i className="bi bi-twitter"></i></a>
        <Link to='/' className='list-group-item'>Labs</Link>
        <Link to='/tuiter/home' className={`${active === 'home' ? 'active': ''} list-group-item`}>Home</Link>
        <Link to='/tuiter/explore' className={`${active === 'explore' ? 'active': ''} list-group-item`}>Explore</Link>
        <a className={`${active === 'notifications' ? 'active': ''} list-group-item`}>Notifications</a>
        <a className={`${active === 'messages' ? 'active': ''} list-group-item`}>Messages</a>
        <a className={`${active === 'bookmarks' ? 'active': ''} list-group-item`}>Bookmarks</a>
        <a className={`${active === 'lists' ? 'active': ''} list-group-item`}>Lists</a>
        <a className={`${active === 'profile' ? 'active': ''} list-group-item`}>Profile</a>
        <a className={`${active === 'more' ? 'active': ''} list-group-item`}>More</a>
    </div>
    );
}
export default NavigationSidebar;

import React from 'react';
import PostList from '../post-list';
import TuitsList from '../tuits/tuits-list';
import WhatsHappening from './whats-happening';

const HomeComponent = () => {
    return (
        <>
            <WhatsHappening />
            <TuitsList />
        </>
    )
}

export default HomeComponent;
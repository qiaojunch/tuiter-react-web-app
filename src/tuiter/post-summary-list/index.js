import React from 'react';
import PostSummaryItem from './post-summary-item';
// import postsArray from './posts.json';
import { useSelector } from 'react-redux';

const PostSummaryList = () => {
    // retriever data from store
    const postsArray = useSelector(state => state.tuits);
    
    return (
        <ul className='list-group'>
            <li className='list-group-item'>post summary</li>
            {
                postsArray.map(
                    postItem => 
                        <PostSummaryItem key={postItem._id} post={postItem}/>
                )
            }
        </ul>
    );
}
export default PostSummaryList;
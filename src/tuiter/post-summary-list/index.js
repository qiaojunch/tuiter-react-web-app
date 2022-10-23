import React from 'react';
import PostSummaryItem from './post-summary-item';
import postsArray from './posts.json';

const PostSummaryList = () => {
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
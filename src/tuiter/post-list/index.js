import PostListItem from './post-list-item';
import postItems from './items.json';

const PostList = () => {
    return (
        <ul className='group-list ps-0'>
            {
                postItems.map( postItem => 
                    <PostListItem key={postItem._id} item={postItem} />
                )
            }
        </ul>
    )
}
export default PostList;
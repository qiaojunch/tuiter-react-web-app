import PostItem from "./PostItem.js";
import items from "./items.js";

function PostList() {
    return (`
        <ul class="list-group">
            ${items.map( item => PostItem(item) ).join('')}
        </ul>
    `);
}

export default PostList;
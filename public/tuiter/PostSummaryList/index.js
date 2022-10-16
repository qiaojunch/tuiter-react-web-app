import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

function PostSummaryList() {
  return (`
    <ul class="list-group">
      ${posts.map( post => PostSummaryItem(post) ).join('')}
    </ul>
  `);
};

export default PostSummaryList;
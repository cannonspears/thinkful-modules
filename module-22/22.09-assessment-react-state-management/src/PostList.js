import React from "react";
import Post from "./Post"

/**
 * Diplays a list of either text or image posts.
 *
 */
function PostList({allPosts, deletePost}) {  
  return <div className="post-list">
    {allPosts.map(onePost => <Post data={onePost} deletePost={deletePost} />)}
  </div>;  
}

export default PostList;

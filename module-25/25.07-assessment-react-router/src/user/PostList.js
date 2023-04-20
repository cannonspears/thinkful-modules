import React from "react";
import {Switch, Route, useParams, useRouteMatch} from "react-router-dom"

import Post from "./Post";
import PostLink from "./PostLink";
import NoPostSelectedMessage from "./NoPostSelectedMessage";

/*
  DONE: Update the below so that the components show on the appropriate route.

  DONE: The <NoPostSelectedMessage /> component should show up on the following route:
  /users/:userId/posts

  DONE: The <Post /> component should show up on the following route:
  /users/:userId/posts/:postId
*/

//  "/users/:userId/posts/:postId"

export const PostList = ({ posts }) => {
  
  const {path} = useRouteMatch()
  console.log(path)
  const postLinks = posts.map((post) => (
    <PostLink key={post.id} userId={post.userId} post={post} />
  ));

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        <Switch>
          <Route exact path={path}>
            <NoPostSelectedMessage />
          </Route>
          <Route path={`${path}/:postId`}   >
            <Post posts={posts} />
          </Route>
        </Switch>
        
        
        
      </div>
    </div>
  );
};

export default PostList;

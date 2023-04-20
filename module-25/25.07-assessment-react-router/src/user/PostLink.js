import React from "react";
import {Switch, Route, useParams, useRouteMatch, Link, useHistory} from "react-router-dom"

/*
  ?DONE: Change the below to be a link that goes to the specific post route using the post id.
*/

export const PostLink = ({ post, userId }) => {
  const {postId} = useParams()
  const {path, url} = useRouteMatch()
  
  return (
    <li className="list-group-item text-truncate">
      <Link to={`${url}/${post.id}`}>{post.title}</Link>
    </li>
  );
};

export default PostLink;

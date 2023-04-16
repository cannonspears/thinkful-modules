import React from "react"

function Post({data, deletePost}) {
  return <div className="post">
    {data.content.includes("http") ? (
      <img src={data.content} />
    ) : (
      <p>{data.content}</p>
    )}
    <button name="delete" onClick={() => deletePost(data)}>Delete</button>
    </div>
}

export default Post
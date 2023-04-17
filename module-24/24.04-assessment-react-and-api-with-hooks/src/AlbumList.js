import React, {useState, useEffect} from "react";

function AlbumList({ user = {} }) {
  const [albums, setAlbums] = useState([]) 
  
  useEffect(() => {
    let abortController = new AbortController()
    if(user.id) {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`, {signal: abortController.signal})
      .then((response) => response.json())
      .then(data => setAlbums(data))
      .catch (error => {
        if (error.name === "AbortError") {
        console.log("aborted")
      } else throw error
      })
     }
    return () => abortController.abort()
  }, [user])
  
  
  return  <div>
      {user.name ? <p>{user.name}</p> : <p>Please click on a user name to the left</p>}
      {albums.map(album => <p key={album.id}>{album.title}</p>)}
    </div>
  
  
}

export default AlbumList;

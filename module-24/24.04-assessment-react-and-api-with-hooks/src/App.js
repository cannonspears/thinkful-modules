import React, { useState, useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    let oldTitle = document.title
    document.title = "Awesome Album App"
    return () => {
      document.title = oldTitle
    }
  }, [])
  
  useEffect(() => {
    let abortController = new AbortController()
    fetch("https://jsonplaceholder.typicode.com/users", {signal: abortController.signal})
      .then((response) => response.json())
      .then(data => setUsers(data))
      .catch(error => {
        if (error.name === "AbortError") {
        console.log("aborted")
      } else throw error
     })
  return () => abortController.abort()
}, []);
  
  return (
    <div className="App">
      <div className="left column">
        <UserList users={users} setCurrentUser={setCurrentUser} />
      </div>
      <div className="right column">
        <AlbumList user={currentUser} />
      </div>
    </div>
  );
}

export default App;

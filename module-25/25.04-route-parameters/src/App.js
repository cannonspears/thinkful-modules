import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import UserProfile from "./UserProfile"

function NewUser() {
  return <p>Unable to create a new user</p>
}

function NoMatch() {
  return <h1>404 Not Found</h1>
}

function App() {
  return (
    <div className="App">
      <Link to="/user/new">New User</Link>
      {Array(10)
        .fill()
        .map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`} data-testid={`user-${id}`}>
              User{id}
            </Link>
          </div>
        ))}
      
      <Switch>
        <Route exact path="/user/new">
          <NewUser />
        </Route>
        <Route exact path="/user/:userId">
          <UserProfile />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
 
    </div>
  );
}

export default App;

import React, { Fragment } from "react";
import {Switch, Route} from "react-router-dom"

import Header from "./common/Header";
import CardList from "./home/CardList";
import User from "./user/User";
import NotFound from "./common/NotFound"

function App() {
  /*
    DONE: There is no need to add a <Router >, it is in index.js.

    DONE: The <CardList /> component should be shown when the user is on the index path.

    DONE: The <User /> component should be shown when the user is on the following path:
    /users/:userId

    DONE: Display <NotFound /> when appropriate
  */
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <CardList />
        </Route>
        <Route path={"/users/:userId"}>
          <User />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    
    </Fragment>
  );
}

export default App;

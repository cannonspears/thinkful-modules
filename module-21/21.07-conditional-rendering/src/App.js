import React from "react";
import Clock from "./Clock";

function App({loggedIn}) {
  // write your code here
  // hint: It's not necessary to pass props to clock as an argument.
  if (loggedIn) {
    return Clock()
  } else {
    return null
  }
  
  
  
}

export default App;

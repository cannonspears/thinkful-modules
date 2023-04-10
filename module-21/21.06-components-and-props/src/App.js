import React from "react";
import Holiday from "./Holiday";

function App() {
  return (
    <React.Fragment>
      <Holiday name="Valentine's Day" day="14" month="February"/>
      <Holiday name="Christmas" day="25" month="December"/>  
    </React.Fragment>
  )
}

export default App;

import React from "react";
import ReactDOM from "react-dom";

const shirts = 4;
const pants = 6;
const website = "https://www.thinkful.com/";
const sentence = `Purchased ${shirts} shirts and ${pants} pants for a total of ${shirts + pants} items`

const element = ( 
    <main>
      <p className="paragraph">{`Purchased ${shirts} shirts and ${pants} pants for a total of ${shirts + pants} items`}</p>
      <a href={website}>Website</a>
    </main>
);


function App(){
  return element;
}

export default App;
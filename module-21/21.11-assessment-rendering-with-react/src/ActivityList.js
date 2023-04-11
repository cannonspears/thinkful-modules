import React from "react";
import "./ActivityList.css";
import Activity from "./Activity.js"

function ActivityList({activities}) {
  const mapped = activities.map((activity, i)=>{
        return (<Activity key={i} time={activity.time} decsription={activity.description}/>)})
                                
 return (
  <div>
      {mapped}
  </div>
  )
}


export default ActivityList;

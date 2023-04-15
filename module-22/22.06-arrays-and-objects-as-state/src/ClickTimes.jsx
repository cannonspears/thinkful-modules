import React, {useState} from "react";
import TimestampsDisplay from "./TimestampsDisplay";

function ClickTimes() {
  const [timeStamps, setTimeStamps] = useState([])
  const handleClickEvent = (value) => setTimeStamps([...timeStamps, value])
  
  return <div>
      <button onClick={() => handleClickEvent(Date.now())}>Button</button>
      <TimestampsDisplay timestamps={timeStamps} />
    </div>
}

export default ClickTimes;

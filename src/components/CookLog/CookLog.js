import React from "react";
import "./CookLog.css";

const CookLog = () => {
  const [cookLogs, setCookLogs] = useState([]);

  // get request for cook logs
  // setCookLogs
  // display

  return (
    <div id='cooklog-contents'>
      <h1>Cooking Log</h1>
      <div id='cooklog-container'>
        {/* {cookLogs.map((cookLog, idx) => (
        <div key={idx}>{cookLog.name}</div>
      ))} */}
      </div>
    </div>
  );
};

export default CookLog;

import React, { useState, useEffect } from "react";
import "./CookLog.css";

const CookLog = () => {
  const [cookLogs, setCookLogs] = useState([]);

  // get request for cook logs
  // setCookLogs
  // display
  useEffect(() => {
    fetch("/api/food-log", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((result) => {
        if (result.errors) {
          alert(result.errors[0]);
        }

        if (result.body) {
          console.log(result.body);
          setCookLogs(result.body);
        }
      });
  }, []);

  return (
    <div id='cooklog-contents'>
      <h1>Cooking Log</h1>
      <div id='cooklog-container'>
        {cookLogs.map((cookLog, idx) => (
          <div key={idx}>
            <div>{cookLog.name}</div>
            <div>{cookLog.date ? cookLog.date : null}</div>
            <div>{cookLog.meal ? cookLog.meal : null}</div>
            <div>{cookLog.rating}</div>
            <div>{cookLog.description ? cookLog.description : null}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookLog;

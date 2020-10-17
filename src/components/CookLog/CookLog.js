import React, { useState, useEffect } from "react";
import "./CookLog.css";
import CookLogCard from "./CookLogCard";

const CookLog = () => {
  const [cookLogs, setCookLogs] = useState([]);

  // get request for cook logs
  // setCookLogs
  // display
  useEffect(() => {
    fetch("/api/cooklog/get-all-cooklogs", {
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
          <CookLogCard key={idx} cookLog={cookLog} />
        ))}
      </div>
    </div>
  );
};

export default CookLog;

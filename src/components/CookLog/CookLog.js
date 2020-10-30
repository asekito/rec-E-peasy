import React, { useState, useEffect } from "react";
import "./CookLog.css";
import { Modal } from "@material-ui/core";
const CookLogCard = React.lazy(() => import("./CookLogCard"));
const AddCookLog = React.lazy(() => import("./AddCookLog.js"));

const CookLog = () => {
  const [cookLogs, setCookLogs] = useState([]);
  const [newCookLog, setNewCookLog] = useState(false);

  const toggle = () => {
    setNewCookLog(!newCookLog);
  };

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
          setCookLogs(result.body);
        }
      });
  }, []);

  return (
    <div id='cooklog-contents'>
      <h1>Cooking Log</h1>
      <button className='btn' onClick={toggle}>
        Add Cook Log
      </button>
      <Modal open={newCookLog} onClose={toggle} className='modal'>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AddCookLog />
        </React.Suspense>
      </Modal>
      <div id='cooklog-container'>
        {cookLogs.map((cookLog, idx) => (
          <CookLogCard key={idx} cookLog={cookLog} />
        ))}
      </div>
    </div>
  );
};

export default CookLog;

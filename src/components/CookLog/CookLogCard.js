import React from "react";
import "./CookLogCard.css"

const CookLogCard = ({ cookLog }) => {
  return (
    <div className="cook-log-card">
      <div className="cooklog-information">
        <div className="cooklog-name">{cookLog.name}</div>
        <div className="coolog-date">{cookLog.date ? cookLog.date : null}</div>
        <div className="cooklog-meal">{cookLog.meal ? cookLog.meal : null}</div>
        <div className="cooklog-rating">{cookLog.rating}</div>
        <div className="cooklog-description">{cookLog.description ? cookLog.description : null}</div>
      </div>
      <div className="cooklog-card-image">image here</div>
    </div>
  );
};

export default CookLogCard;

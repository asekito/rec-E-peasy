import React from "react";

const CookLogCard = ({ cookLog }) => {
  return (
    <div>
      <div>{cookLog.name}</div>
      <div>{cookLog.date ? cookLog.date : null}</div>
      <div>{cookLog.meal ? cookLog.meal : null}</div>
      <div>{cookLog.rating}</div>
      <div>{cookLog.description ? cookLog.description : null}</div>
    </div>
  );
};

export default CookLogCard;

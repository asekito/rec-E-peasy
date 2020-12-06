import React from "react";
import "./AddCookLog.css";

const AddCookLog = () => {
  return (
    <div id='add-cook-log-content'>
      <h1>Add Cook Log</h1>
      <div className='cook-log-form'>
        <label className='cook-log-labels'>
          Cook Log Name
          <input type='text' />
        </label>
        <label className='cook-log-labels'>
          Associated Recipe
          <input type='text' />
        </label>
        <label className='cook-log-labels'>
          Date
          <input type='date' />
        </label>
        <label className='cook-log-labels'>
          Meal
          <select>
            <option value='Breakfast'>Breakfast</option>
            <option value='Lunch'>Lunch</option>
            <option value='Dinner'>Dinner</option>
            <option value='Snack'>Snack</option>
          </select>
        </label>
        <label className='cook-log-labels'>
          Rating
          <input type='number' placeholder='Out of 10' />
        </label>
        <label className='cook-log-labels'>
          Notes
          <input type='text' />
        </label>
      </div>
    </div>
  );
};

export default AddCookLog;

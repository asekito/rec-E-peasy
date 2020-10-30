import React from "react";
import "./AddCookLog.css";

const AddCookLog = () => {
  return (
    <div id='add-cook-log-content'>
      <h1>Add Cook Log</h1>
      <div className='cook-log-form'>
        <label>
          Cook Log Name
          <input type='text' />
        </label>
        <label>
          Associated Recipe
          <input type='text' />
        </label>
        <label>
          Date
          <input type='date' />
        </label>
        <label>
          Meal
          <select>
            <option value='Breakfast'>Breakfast</option>
            <option value='Lunch'>Lunch</option>
            <option value='Dinner'>Dinner</option>
            <option value='Snack'>Snack</option>
          </select>
        </label>
        <label>
          Rating
          <input type='number' /> / 10
        </label>
        <label>
          Notes
          <input type='text' />
        </label>
      </div>
    </div>
  );
};

export default AddCookLog;

const AddingIngredient = `<form class="new-ingredient-measurements">
<input type="text" name="ingredient" placeholder="ingredient name" />
<input
  type="text"
  name="estimated-amount"
  placeholder="guesstimated amount (OPTIONAL)"
/>
<input
  type="number"
  name="measured-amount"
  placeholder="measured amount (OPTIONAL)"
/>
<select name="measured-unit" class="measured-unit">
  <option defaultValue="" value="">
    -
  </option>
  <option value="ounce">ounce</option>
  <option value="pounds">pound(s)</option>
  <option value="pint">pint</option>
  <option value="cup">cup</option>
  <option value="tablespoons">tablespoons</option>
  <option value="teaspoon">teaspoon</option>
</select>
</form>`;

export default AddingIngredient;

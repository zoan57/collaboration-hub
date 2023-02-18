import { doc } from "prettier";
import React, { useState } from "react";

const BudgetSetting = () => {
  const [budgetValue, setBudgetValue] = useState("1,000");
  const [budgetCheck, setBudgetCheck] = useState(true);
  const handleBudgetCheckChange = (e) => {
    if(e.target.checked){
      setBudgetCheck(false)
    }else{
      setBudgetCheck(true)
    }
  };
  function handleBudgetChange(e) {
    const newValue = e.target.value.replace(/\D/g, "");
    const inputNumber = parseInt(newValue, 10);
    if (isNaN(inputNumber)) {
      // if input is not a number, set the input value to an empty string
      setBudgetValue("");
      return;
    }
    const formattedValue = inputNumber.toLocaleString();
    setBudgetValue(formattedValue);
  }

  return (
    <section className="addproject">
      <div className="budgetSetting">
        <div className="budgetSettingCheck">
          <label class="btn-check-switch">
            <input
              type="checkbox"
              name="budgetSettingCheck"
              id="budgetSettingCheck"
              onChange={handleBudgetCheckChange}
            ></input>
            <span class="btn-check-slider"></span>
          </label>
          <h4>Do you have a budget allocated for this project?</h4>
        </div>
        <input
          type="text"
          name="budgetSettingBudgetInput"
          value={`$${budgetValue}`}
          maxLength="8"
          className={`budgetSetting-budgetinput ${budgetCheck && "hide"}`}
          onChange={handleBudgetChange}
        ></input>
      </div>
    </section>
  );
};

export default BudgetSetting;

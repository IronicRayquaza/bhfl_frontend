import React, { useState } from "react";
import "./MultiSelectDropdown.css";

const MultiSelectDropdown = ({ setSelectedFilters }) => {
  const options = ["Alphabets", "Numbers", "Highest Alphabet"];
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    let updatedValues;

    if (selectedValues.includes(value)) {
      updatedValues = selectedValues.filter((item) => item !== value);
    } else {
      updatedValues = [...selectedValues, value];
    }

    setSelectedValues(updatedValues);
    setSelectedFilters(updatedValues);
  };

  return (
    <div className="dropdown-container">
      <select multiple className="dropdown-select">
        {options.map((option) => (
          <option key={option} value={option} onClick={handleChange} selected={selectedValues.includes(option)}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultiSelectDropdown;

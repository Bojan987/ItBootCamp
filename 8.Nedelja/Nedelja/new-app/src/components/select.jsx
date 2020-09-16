import React from "react";

export const Select = ({ allLaunches, setFilteredLaunches }) => {
  const years = allLaunches.map((el) => el.launch_year);
  const filteredYEars = [...new Set(years)];
  // console.log(filteredYEars)

  const handleSelectChange = (event) => {
    const { value } = event.target;
    console.log(value);
    if (value !== "svi") {
      setFilteredLaunches(allLaunches.filter((el) => value == el.launch_year));
    } else setFilteredLaunches(allLaunches);
  };
  return (
    <div>
      <select onChange={handleSelectChange}>
        <option value="svi">svi</option>
        {filteredYEars.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

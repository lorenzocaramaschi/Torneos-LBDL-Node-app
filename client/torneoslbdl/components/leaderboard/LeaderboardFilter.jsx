import React from "react";
import { FilterAltOutlined } from "@mui/icons-material";

//  displays a dropdown menu for filtering the leaderboard data by year
const LeaderboardFilter = ({ year, filteringYear }) => {
  // year controls the selected value of the dropdown
  // filteringYear handles the change event in the year
  return (
    /* we render a dropdown with a label and a list of options for each available year */
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            padding: "0.5rem",
            borderRadius: "14px",
            backgroundColor: "#DFDFDF",
            color: "#BFC0D9",
            fontWeight: "bold",
          }}
        >
          <FilterAltOutlined /> Filtrar por
          <label>
            Año
            <select onChange={filteringYear} value={year}>
              <option value="2023" defaultValue>
                2023
              </option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </label>
        </div>
      </div>
    </>
  );
};

export default LeaderboardFilter;

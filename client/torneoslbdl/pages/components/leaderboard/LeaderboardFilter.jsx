import React from "react";
import { FilterAltOutlined } from "@mui/icons-material";

const LeaderboardFilter = ({ year, filteringYear }) => {
  return (
    <>
      <div>
        <div>
          <FilterAltOutlined /> Filtrar por:
        </div>
        <label>
          Año
          <select onChange={filteringYear} value={year}>
            <option value="2023" defaultValue>
              2023
            </option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </label>
      </div>
    </>
  );
};

export default LeaderboardFilter;

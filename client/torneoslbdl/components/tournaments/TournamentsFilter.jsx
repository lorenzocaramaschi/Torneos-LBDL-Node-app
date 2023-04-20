import { FilterAltOutlined } from "@mui/icons-material";
import React from "react";

const TournamentsFilter = ({ category, filteringTournaments }) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem"}}>
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
          <select onChange={filteringTournaments} value={category}>
            <option value="all" defaultValue>
              Todos
            </option>
            <option value="drafts">Drafts</option>
            <option value="tournaments">Copas</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default TournamentsFilter;

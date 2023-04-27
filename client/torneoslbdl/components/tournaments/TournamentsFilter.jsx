import { FilterAltOutlined } from "@mui/icons-material";
import React from "react";

// displays filters for the tournaments
const TournamentsFilter = ({ category, filteringTournaments }) => {
  return (
    <>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <div
          style={{
            padding: "0.5rem",
            borderRadius: "14px",
            backgroundColor: "#DFDFDF",
            color: "#BFC0D9",
            fontWeight: "bold",
          }}
        >
          <FilterAltOutlined /> Filtrar por {/* Filter by */}
          <select onChange={filteringTournaments} value={category}>
            <option value="all" defaultValue>
              Todos {/* All */}
            </option>
            <option value="drafts">Drafts</option>
            <option value="tournaments">Copas</option> {/* Tournaments */}
          </select>
        </div>
      </div>
    </>
  );
};

export default TournamentsFilter;

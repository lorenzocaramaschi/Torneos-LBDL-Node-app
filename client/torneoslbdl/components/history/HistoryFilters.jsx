import { FilterAltOutlined } from "@mui/icons-material";
import React from "react";

// displays a set of filter dropdown menus with labels and options for filtering all matches received from the team
// the filters 
const HistoryFilters = (
  data,
  {
    rival,
    goalDifference,
    history,
    matches,
    category,
    filteringCategory,
    filteringGoalDifference,
    filteringMatches,
    filteringRival,
    filteringHistory,
    resetFilter,
  }
) => {
  const rivals = Array.from(
    new Set(data.data.flatMap((match) => [match.home, match.away]))
  ).filter((team) => team !== data.teamName);

  return (
    <>
      <div>
        <div
          style={{
            paddingLeft: "0.5rem",
            borderRadius: "14px",
            backgroundColor: "#DFDFDF",
            color: "#BFC0D9",
            fontWeight: "bold",
          }}
        >
          <FilterAltOutlined style={{ color: "#BFC0D9" }} />
          Filtrar por:
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "5px",
            margin: "1rem 0",
          }}
        >
          {/* Filter matches by Rival */}
          <label>
            Rival
            <select onChange={data.filteringRival} value={data.rival}>
              <option value="all" defaultValue>
                Todos
              </option>
              {rivals.map((rival) => (
                <option key={rival} value={rival}>
                  {rival}
                </option>
              ))}
            </select>
          </label>
          {/* Filter matches by goal difference */}
          <label>
            Diferencia de gol
            <select
              onChange={data.filteringGoalDifference}
              value={data.goalDifference}
            >
              <option value="all" defaultValue>
                Todos
              </option>
              <option value="+3">+3</option>
              <option value="+2">+2</option>
              <option value="+1">+1</option>
              <option value="0">0</option>
              <option value="-1">-1</option>
              <option value="-2">-2</option>
              <option value="-3">-3</option>
            </select>
          </label>
          {/* These filter is not working yet */}
          <label>
            Historiales
            <select onChange={data.filteringHistory} value={data.history}>
              <option value="all" defaultValue>
                Todos
              </option>
              <option value="positive">Positivos</option>
              <option value="tied">Empatados</option>
              <option value="negative">Negativos</option>
            </select>
          </label>
          {/* Filter matches by won/tied/lost */}
          <label>
            Partidos
            <select onChange={data.filteringMatches} value={data.matches}>
              <option value="all" defaultValue>
                Todos
              </option>
              <option value="won">Ganados</option>
              <option value="tied">Empatados</option>
              <option value="lost">Perdidos</option>
            </select>
          </label>
          {/* Filter matches by official/friendly tournament */}
          <label>
            Torneos/Partidos
            <select onChange={data.filteringCategory} value={data.category}>
              <option value="all" defaultValue>
                Todos
              </option>
              <option value="friendly">Amistosos</option>
              <option value="oficial">Oficiales</option>
            </select>
          </label>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* This button resets all filters */}
          <button
            style={{
              border: "none",
              backgroundColor: "#6568A6",
              borderRadius: "14px",
              color: "white",
              fontWeight: "bold",
              padding: "0.5rem",
              display: "flex",
              marginBottom: "1rem",
            }}
            type="button"
            onClick={data.resetFilter}
          >
            REINICIAR FILTROS
          </button>
        </div>
      </div>
    </>
  );
};

export default HistoryFilters;

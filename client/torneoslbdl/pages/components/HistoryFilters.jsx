import { FilterAltOutlined } from "@mui/icons-material";
import React from "react";

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
  return (
    <>
      <div>
        <div>
          Filtrar por: <FilterAltOutlined />
        </div>
        <div>
          <label>
            Rival
            <select onChange={data.filteringRival} value={data.rival}>
              <option value="all" defaultValue>
                Todos
              </option>
              {data.data.map((match) => {
                let rival;
                match.home === data.teamName
                  ? (rival = match.away)
                  : (rival = match.home);
                return (
                  <option key={match._id} value={rival}>
                    {rival}
                  </option>
                );
              })}
            </select>
          </label>
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
        <button type="button" onClick={data.resetFilter}>
          REINICIAR FILTROS
        </button>
      </div>
    </>
  );
};

export default HistoryFilters;

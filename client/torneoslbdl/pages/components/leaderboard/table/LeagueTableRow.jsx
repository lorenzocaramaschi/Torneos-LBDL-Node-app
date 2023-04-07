import React from "react";
import styled from "styled-components";

const LeagueTableRow = ({
  position,
  name,
  played,
  won,
  drawn,
  lost,
  goalFor,
  goalAgainst,
  point,
}) => {
  return (
    <Tr position={position}>
      <TdPosName style={{ width: "2em" }}>{position}</TdPosName>
      <TdPosName style={{ textAlign: "left", width: "15em" }}>
        {teamMapping[name]}
      </TdPosName>
      <TdNumber style={{ borderLeft: 0 }}>{won + drawn + lost}</TdNumber>
      <TdNumber>{won}</TdNumber>
      <TdNumber>{drawn}</TdNumber>
      <TdNumber>{lost}</TdNumber>
      <TdNumber>{goalFor}</TdNumber>
      <TdNumber>{goalAgainst}</TdNumber>
      <TdNumber>{goalFor - goalAgainst}</TdNumber>
      <TdNumber>{point}</TdNumber>
    </Tr>
  );
};

export default LeagueTableRow;

const Tr = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ position }) =>
    position === 1
      ? "#FF0047"
      : position < 5
      ? "#E10040"
      : position > 17
      ? "#8A0036"
      : "#AB0039"};
`;
const TdPosName = styled.div`
  padding: 0.5em;
  border-bottom: solid #360037 1px;
`;
const TdNumber = styled.div`
  box-sizing: content-box;
  padding: 0.5em;
  width: 2em;
  border: solid #360037 1px;
  border-top: 0;
  border-right: 0;
`;

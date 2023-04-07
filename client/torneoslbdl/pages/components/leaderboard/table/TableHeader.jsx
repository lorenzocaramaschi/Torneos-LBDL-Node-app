import styled from "styled-components"

const Th = styled.div`
  width: 2em;
  padding: .5em;
  border: solid #360037 1px;
  border-right: 0;
  font-weight: 400;
`
const TableHeader = () =>
  <div style={{ display: "flex"}}>
    <Th>Equipos</Th>
    <Th>G</Th>
    <Th>E</Th>
    <Th>D</Th>
    <Th>GF</Th>
    <Th>GC</Th>
    <Th>DIF</Th>
    <Th>PTS</Th>
  </div>

  export default TableHeader
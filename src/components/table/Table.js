import React from "react";
import styled from "styled-components";
const TableStyles = styled.div`
  overflow-x: auto;
  background-color: white;
  border-radius: 10px;
  table {
    width: 100%;
  }
  th,
  td {
    vertical-align: middle;
  }
  th {
    padding: 20px 10px;
    font-weight: 500;
    text-align: left;
    font-size: 20px;
  }
  td {
    padding: 15px 10px;
  }
  tbody {
  }
`;
const Table = ({ children, className }) => {
  return (
    <TableStyles className={className}>
      <table>{children}</table>
    </TableStyles>
  );
};

export default Table;

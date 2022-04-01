import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const TableOfContent = ({ tableData, tableHeaders }) => {
  return (
    <Table striped bordered hover>
      {tableHeaders ? (
        <thead>
          <tr>
            {tableHeaders.map((header, index) => {
              return <th key={index}>{header}</th>;
            })}
          </tr>
        </thead>
      ) : null}
      {tableData ? (
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr>
                <td>{data["#"]}</td>
                <td>
                  <Link to={data.link}>{data.name}</Link>
                </td>
                <td>{data.fileLocation}</td>
              </tr>
            );
          })}
        </tbody>
      ) : null}
    </Table>
  );
};

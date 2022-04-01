import React, { Component } from "react";
import { TableOfContent } from "../components/table/Table";

export class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      tableData: [
        {
          "#": "1",
          name: "JSX Example",
          link: "example-1",
          fileLocation: "src/examples/example1-react-jsx",
        },
        {
          "#": "2",
          name: "React State Example",
          link: "example-2",
          fileLocation: "src/examples/example-2-state",
        },
      ],
      tableHeaders: ["#", "Example", "File Location"],
    };
  }

  render() {
    return (
      <>
        <h2 style={{ textAlign: "center", marginTop: "10%" }}>
          Week 4 Examples
        </h2>
        <p style={{ color: "#808080", marginTop: "5%" }}>
          Click on examples to see output. To edit them, access the file
          location
        </p>
        <TableOfContent
          tableData={this.state.tableData}
          tableHeaders={this.state.tableHeaders}
        />
      </>
    );
  }
}

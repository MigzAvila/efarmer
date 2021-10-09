import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function BasicFilteringGrid(props) {
  const data = props.data
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}

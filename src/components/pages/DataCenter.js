import * as React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import DoughnutChart from "../charts/doughnutChart";

import DataTable from "./dataTable/dataTable";
import { useDemoData } from "@mui/x-data-grid-generator";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Demo() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={5}>
          <Item>
            <DoughnutChart />
          </Item>
        </Grid>
      </Grid>
      <DataTable data={data} />
    </Box>
  );
}

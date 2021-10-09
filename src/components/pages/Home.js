import React from "react";
import DoughnutChart from "../charts/doughnutChart";
import BarChart from "../charts/barChart";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@material-ui/core/Paper";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Reports</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <DoughnutChart />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <BarChart />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

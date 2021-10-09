import * as React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  Legend,
  BarSeries,
  Chart,
  PieSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const chartData = [
  { region: "Asia", val: 4119626293 },
  { region: "Africa", val: 1012956064 },
  { region: "Northern America", val: 344124520 },
  { region: "Latin America and the Caribbean", val: 590946440 },
  { region: "Europe", val: 727082222 },
  { region: "Oceania", val: 35104756 },
];
const barGraphData = [
  { year: "1950", population: 2.525},
  { year: "1960", population: 3.018 },
  { year: "1970", population: 3.682 },
  { year: "1980", population: 4.44 },
  { year: "1990", population: 5.31 },
  { year: "2000", population: 6.127 },
  { year: "2010", population: 6.93 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      chartData,
      barGraphData,
    };
  }

  render() {
    const { chartData: chartData } = this.state;
    const { barGraphData: barGraphData } = this.state;
    return (
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <Chart data={chartData}>
                <PieSeries
                  valueField="val"
                  argumentField="region"
                  innerRadius={0.6}
                />
                <Title text="The Population of Continents and Regions" />
                <Animation />
                <Legend />
              </Chart>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Chart data={barGraphData}>
                <ArgumentAxis />
                <ValueAxis max={7} />

                <BarSeries valueField="population" argumentField="year" />
                <Title text="World population" />
                <Animation />
              </Chart>
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

const style ={
    
}
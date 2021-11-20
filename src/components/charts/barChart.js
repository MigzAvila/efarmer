import * as React from "react";
import Box from "@mui/material/Box";
import {
  BarSeries,
  Chart,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const barGraphData = [
  { year: "1950", population: 2.525 },
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
      barGraphData,
    };
  }

  render() {
    const { barGraphData: barGraphData } = this.state;
    return (
      <Box sx={{ width: "100%" }}>
        <Chart data={barGraphData}>
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries valueField="population" argumentField="year" />
          <Title text="World population" />
          <Animation />
        </Chart>
      </Box>
    );
  }
}

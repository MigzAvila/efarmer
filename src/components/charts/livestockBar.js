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
  { year: "Cows", population: 3000},
  { year: "Pigs", population: 500 },
  { year: "Chickens", population: 800 },
  { year: "Sheeps", population: 200 },
  { year: "Horses", population: 100 },
  { year: "Goat", population: 100 },
  
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
      <Box sx={{ width: "100%" }}><Chart data={barGraphData}>
                <ArgumentAxis />
                <ValueAxis max={7} />

                <BarSeries valueField="population" argumentField="year" />
                <Title text="LiveStock" />
                <Animation />
              </Chart>
      </Box>
    );
  }
}

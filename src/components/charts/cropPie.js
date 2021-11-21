import * as React from "react";
// import Paper from "@material-ui/core/Paper";
import Box from "@mui/material/Box";
// import { styled } from "@mui/material/styles";
import {
  Legend,
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const chartData = [
  { region: "Corn", val: 4119626293 },
  { region: "Beans", val: 1012956064 },
  { region: "Rice", val: 344124520 },
  { region: "Onions", val: 590946440 },
  { region: "Tomatoes", val: 727082222 },
  { region: "Sweet Pepper", val: 35104756 },
];
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      chartData,
    };
  }

  render() {
    const { chartData: chartData } = this.state;
    return (
      <Box sx={{ width: "100%" }}>
        <Chart data={chartData}>
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.6}
          />
          <Title text="Crops" />
          <Animation />
          <Legend />
        </Chart>
      </Box>
    );
  }
}

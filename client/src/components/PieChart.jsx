import React from "react";
import { Animation } from "@devexpress/dx-react-chart";
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";

const PieChart = ({ data }) => {
  return (
    <>
      <Chart data={data}>
        <PieSeries valueField="value" argumentField="argument" />
        <Title text="Visuals for sessions" />
        <Legend />
        <Animation />
      </Chart>
    </>
  );
};

export default PieChart;

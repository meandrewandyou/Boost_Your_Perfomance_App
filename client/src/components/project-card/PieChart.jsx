import React from "react";
import { Animation } from "@devexpress/dx-react-chart";
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { Paper } from "@mui/material";

// I don't like that PieChart at all, will change it to another one later.

const ProjectPieChart = ({ sessions }) => {
  return (
    <>
      <Paper
        sx={{ position: "relative", zIndex: 10, opacity: 0.95 }}
        elevation={8}
      >
        <Chart data={sessions}>
          <PieSeries valueField="value" argumentField="argument" />
          <Title text="Visuals for sessions" />
          <Legend />
          <Animation />
        </Chart>
      </Paper>
    </>
  );
};

export default ProjectPieChart;

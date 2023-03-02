import { CardActionArea } from "@mui/material";
import React from "react";

const ProjectCardActionArea = (props) => {
  const { timerState, handleSetTab } = props;
  return (
    <>
      <CardActionArea
        disabled={timerState}
        onClick={(e) => {
          handleSetTab(e);
        }}
        value="overall"
      >
        Overall
      </CardActionArea>
      <CardActionArea
        value="statistics"
        disabled={timerState}
        onClick={(e) => {
          handleSetTab(e);
        }}
      >
        Statistics
      </CardActionArea>
      <CardActionArea
        value="goals"
        disabled={timerState}
        onClick={(e) => {
          handleSetTab(e);
        }}
      >
        Goals
      </CardActionArea>
      <CardActionArea
        value="description"
        disabled={timerState}
        onClick={(e) => {
          handleSetTab(e);
        }}
      >
        Description
      </CardActionArea>
      <CardActionArea
        value="note"
        disabled={timerState}
        onClick={(e) => {
          handleSetTab(e);
        }}
      >
        Note
      </CardActionArea>
    </>
  );
};

export default ProjectCardActionArea;

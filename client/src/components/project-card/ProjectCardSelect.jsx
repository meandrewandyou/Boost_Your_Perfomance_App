import { MenuItem, Select } from "@mui/material";
import React from "react";

const ProjectCardSelect = (props) => {
  const { handleSetTab, tab, timerState } = props;

  return (
    <>
      <Select
        onChange={(e) => {
          handleSetTab(e);
        }}
        fullWidth
        value={tab}
      >
        <MenuItem value="overall" disabled={timerState}>
          Overall
        </MenuItem>
        <MenuItem value="statistics" disabled={timerState}>
          Statistics
        </MenuItem>
        <MenuItem value="goals" disabled={timerState}>
          Goals
        </MenuItem>
        <MenuItem value="description" disabled={timerState}>
          Description
        </MenuItem>
        <MenuItem value="note" disabled={timerState}>
          Note
        </MenuItem>
      </Select>
    </>
  );
};

export default ProjectCardSelect;

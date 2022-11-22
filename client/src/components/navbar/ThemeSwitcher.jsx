import { BeachAccessTwoTone, ForestTwoTone } from "@mui/icons-material";
import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../redux/slices/darkMode";

const ThemeSwitcher = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <>
      <FormControlLabel
        sx={{ marginLeft: "10px" }}
        control={
          <Switch
            color="default"
            checked={darkMode}
            onChange={() => {
              dispatch(changeMode());
            }}
          />
        }
        label={
          darkMode ? (
            <ForestTwoTone fontSize="large" color="secondary" />
          ) : (
            <BeachAccessTwoTone fontSize="large" color="secondary" />
          )
        }
      />
    </>
  );
};

export default ThemeSwitcher;

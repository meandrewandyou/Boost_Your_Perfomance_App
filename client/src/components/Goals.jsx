import { Check, DeleteForever } from "@mui/icons-material";
import {
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  Checkbox,
  ButtonBase,
  Box,
  Tooltip,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const Goals = () => {
  const [data, setData] = useState([
    { text: "Add some feature", checked: false },
    { text: "Beautify", checked: false },
    { text: "Optimize", checked: false },
    { text: "Make responsive", checked: true },
    { text: "Add another feature", checked: false },
  ]);

  const [goal, setGoal] = useState({ text: "", checked: false });

  const setCheked = (e) => {
    const foundItem = data.find((item) => item.text === e.target.value);
    const newData = data.map((obj) =>
      obj.text === foundItem.text
        ? { ...obj, checked: !foundItem.checked }
        : obj
    );
    setData(newData);
  };

  const handleDeleteObjective = (item) => {
    const newData = data.filter((foundItem) => foundItem.text !== item.text);
    setData(newData);
  };

  const handleGoalText = (e) => {
    const text = e.target.value;
    setGoal({ ...goal, text });
  };

  const addNewGoal = (e) => {
    e.preventDefault();
    const sameGoal = data.find((item) => item.text === goal.text);
    !sameGoal
      ? setData(
          (prevValue) => [...prevValue, goal],
          () => {
            setGoal({ text: "", checked: false });
          }
        )
      : window.alert("You already have this goal");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          addNewGoal(e);
        }}
      >
        <TextField
          onChange={(e) => {
            handleGoalText(e);
          }}
          value={goal.text}
          sx={{ margin: "1rem 0" }}
          color="warning"
          fullWidth
          label="Add some"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" edge="end">
                  <Check />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </form>
      <List>
        {data.map((item, i) => (
          <ListItem
            sx={item.checked && { textDecoration: "line-through" }}
            key={i}
            secondaryAction={
              <Box>
                <Tooltip title="mark as completed" placement="left-start">
                  <Checkbox
                    value={item.text}
                    edge="end"
                    onChange={(e) => {
                      setCheked(e);
                    }}
                    checked={item.checked}
                  />
                </Tooltip>
                <Tooltip title="delete" placement="right-start">
                  <ButtonBase
                    onClick={() => {
                      handleDeleteObjective(item);
                    }}
                    sx={{ marginLeft: "5px", "&:hover": { color: "#DD5353" } }}
                  >
                    <DeleteForever />
                  </ButtonBase>
                </Tooltip>
              </Box>
            }
          >
            {item.text}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Goals;

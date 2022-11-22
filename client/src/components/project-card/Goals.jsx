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
  Slide,
  Paper,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProjects } from "../../redux/slices/userSlice";

const Goals = ({ goals, projectId, updateAnimate }) => {
  const [goal, setGoal] = useState({ text: "", checked: false });
  const dispatch = useDispatch();
  const loggedUserProjects = useSelector(
    (state) => state.loggedUserState.projects
  );

  const handleCheked = (e) => {
    const foundItem = goals.find((item) => item.text === e.target.value);
    const newGoals = goals.map((obj) =>
      obj.text === foundItem.text
        ? { ...obj, checked: !foundItem.checked }
        : obj
    );

    const updatedProjects = loggedUserProjects.map((project) =>
      project.goals !== goals ? project : { ...project, goals: newGoals }
    );
    dispatch(updateProjects(updatedProjects));
    updateAnimate();
  };

  const handleDeleteGoal = (item) => {
    const updatedGoals = goals.filter(
      (foundItem) => foundItem.text !== item.text
    );
    const updatedProjects = loggedUserProjects.map((project) =>
      project.id === projectId ? { ...project, goals: updatedGoals } : project
    );
    dispatch(updateProjects(updatedProjects));
  };

  const handleGoalText = (e) => {
    const text = e.target.value;
    setGoal({ ...goal, text });
  };

  const addNewGoal = (e) => {
    e.preventDefault();
    const foundGoal = goals.find((item) => item.text === goal.text);
    if (!foundGoal) {
      const updatedGoals = [...goals, goal];
      const updatedProjects = loggedUserProjects.map((project) =>
        project.id === projectId ? { ...project, goals: updatedGoals } : project
      );
      dispatch(updateProjects(updatedProjects));
      setGoal({ text: "", checked: false });
    } else {
      window.alert("You already have this goal");
    }
  };

  return (
    <>
      <Slide timeout={500} direction="left" in={true}>
        <Paper
          sx={{
            padding: "1rem",
            position: "relative",
            zIndex: 10,
            opacity: 0.8,
          }}
          elevation={8}
        >
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
            {goals.map((item, i) => (
              <ListItem
                sx={item.checked ? { textDecoration: "line-through" } : {}}
                key={i}
                secondaryAction={
                  <Box>
                    <Tooltip title="mark as completed" placement="left-start">
                      <Checkbox
                        value={item.text}
                        edge="end"
                        onChange={(e) => {
                          handleCheked(e);
                        }}
                        checked={item.checked}
                      />
                    </Tooltip>
                    <Tooltip title="delete" placement="right-start">
                      <ButtonBase
                        onClick={() => {
                          handleDeleteGoal(item);
                        }}
                        sx={{
                          marginLeft: "5px",
                          "&:hover": { color: "#DD5353" },
                        }}
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
        </Paper>
      </Slide>
    </>
  );
};

export default Goals;

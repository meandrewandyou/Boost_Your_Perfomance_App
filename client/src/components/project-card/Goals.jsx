import {
  TextField,
  List,
  Slide,
  Paper,
  CircularProgress,
  FormControl,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterFormButton } from "../../additionalStuff/styledMuiComponents";
import { setGoals } from "../../redux/slices/userSlice";
import GoalsListItem from "./GoalsListItem";

const Goals = ({ goals, projectId, updateAnimate }) => {
  const [goal, setGoal] = useState({ text: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });
  const dispatch = useDispatch();
  const loggedUserProjects = useSelector(
    (state) => state.loggedUserState.projects
  );
  const loggedUser = useSelector((state) => state.loggedUserState.userName);

  const handleGoal = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const addNewGoal = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("user/addGoal", {
        projectId,
        loggedUser,
        goal,
      });

      if (response && response.status === 200) {
        const index = await loggedUserProjects.findIndex(
          (project) => project._id === projectId
        );
        const goals = response.data;
        setGoal({ text: "", description: "" });
        dispatch(setGoals({ index, goals }));
        setLoading(false);
        error.status && setError({ ...error, status: false });
      }
    } catch (err) {
      err.response
        ? setError({ status: true, message: err.response.data })
        : setError({
            status: true,
            message:
              "No response from the server or something wrong with your internet connection",
          });
      setLoading(false);
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
            <FormControl fullWidth>
              <TextField
                variant="filled"
                name="text"
                onChange={(e) => {
                  handleGoal(e);
                }}
                value={goal.text}
                sx={{ margin: "1rem 0 0 0" }}
                color="warning"
                required
                error={error.status}
                helperText={error.status && error.message}
                label="Goal"
              ></TextField>
              <TextField
                variant="filled"
                name="description"
                onChange={(e) => {
                  handleGoal(e);
                }}
                value={goal.description}
                color="warning"
                label="Description"
              ></TextField>
              <RegisterFormButton
                children={
                  !loading ? "Add Goal" : <CircularProgress size={16} />
                }
                sx={{ margin: 0 }}
                variant="contained"
                content={"Add goal"}
                type="submit"
              />
            </FormControl>
          </form>
          <List sx={{ maxHeight: "320px", overflow: "auto" }}>
            {goals.map((item) => (
              <GoalsListItem
                item={item}
                id={item._id}
                key={item._id}
                goals={goals}
                loggedUserProjects={loggedUserProjects}
                projectId={projectId}
                loggedUser={loggedUser}
                updateAnimate={updateAnimate}
              />
            ))}
          </List>
        </Paper>
      </Slide>
    </>
  );
};

export default Goals;

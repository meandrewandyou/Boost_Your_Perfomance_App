import { AddBox } from "@mui/icons-material";
import {
  ButtonBase,
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { RegisterFormButton } from "../additionalStuff/styledMuiComponents";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { updateProjects } from "../redux/slices/userSlice";

const AddNewProject = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const dummyProject = {
    projectName: "",
    id: uuid(),
    description: "",
    goals: [],
    subProjects: [],
    sessions: [
      { argument: "Medium", value: 0, seconds: 10 },
      { argument: "Long", value: 0, seconds: 15 },
      { argument: "Short", value: 0, seconds: 5 },
    ],
    totalWorkTime: 0,
  };

  const [project, setProject] = useState(dummyProject);
  const loggedUserProjects = useSelector(
    (state) => state.loggedUserState.projects
  );

  const setProjectName = (e) => {
    const projectName = e.target.value;
    setProject({ ...project, projectName });
  };

  const setProjectDescription = (e) => {
    const description = e.target.value;
    setProject({ ...project, description });
  };

  const addProject = () => {
    const updatedProjects = [...loggedUserProjects, project];
    dispatch(updateProjects(updatedProjects));
  };

  return (
    <>
      <Tooltip title="Add new project to work on">
        <ButtonBase
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            top: "100px",
            right: "40px",
            marginLeft: "auto",
            boxShadow: 3,
            transition: "all 300ms",
            borderRadius: "10px",
            "&:hover": {
              boxShadow: 7,
            },
          }}
        >
          <AddBox
            sx={{
              fontSize: "60px",
              color: "primary.main",
              margin: 0,
            }}
          />
        </ButtonBase>
      </Tooltip>
      <Dialog
        sx={{ textAlign: "center", alignContent: "center" }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>Add new project</DialogTitle>
        <DialogContent
          sx={{
            width: "450px",
          }}
        >
          <DialogContentText>
            Think about next thing you're going to work on, describe it, set few
            first goals.
          </DialogContentText>
          <form
            id="add-goal"
            onSubmit={(e) => {
              e.preventDefault();
              addProject();
            }}
          >
            <TextField
              onChange={(e) => {
                setProjectName(e);
              }}
              value={project.projectName}
              sx={{ margin: "20px 0" }}
              fullWidth
              required
              label="Project Name"
            />
            <TextField
              onChange={(e) => {
                setProjectDescription(e);
              }}
              value={project.descriprion}
              sx={{ margin: "20px 0" }}
              fullWidth
              required
              label="Description"
              multiline
              rows={4}
            />
          </form>
          <ButtonGroup sx={{ width: "35%" }}>
            <RegisterFormButton
              type="sublit"
              variant="contained"
              form="add-goal"
            >
              <AddBox />
            </RegisterFormButton>
          </ButtonGroup>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewProject;

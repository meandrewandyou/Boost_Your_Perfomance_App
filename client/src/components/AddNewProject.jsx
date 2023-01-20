import { AddBox, Check } from "@mui/icons-material";
import {
  ButtonBase,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProjects } from "../redux/slices/userSlice";
import {
  addButtonSpinBackwards,
  addButtonSpinForwards,
} from "../additionalStuff/animations";
import axios from "axios";
import StatusMessage from "./navbar/reglog/StatusMessage";
import SubmitButton from "./navbar/reglog/SubmitButton";

const AddNewProject = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const loggedUser = useSelector((state) => state.loggedUserState.userName);
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const [project, setProject] = useState({ projectName: "", description: "" });
  const [open, setOpen] = useState(false);
  const [animateButton, setAimateButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    text: "What are you going to work on?",
    color: "default",
  });

  const handleSetProject = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const addProject = async () => {
    setLoading(true);
    try {
      const response = await axios.post("user/addProject", {
        loggedUser,
        project,
      });

      if (response && response.status === 200) {
        dispatch(updateProjects(response.data));
        setLoading(false);
        setStatusMessage({
          text: "Success!",
          color: "green",
        });
        setTimeout(() => {
          setOpen(false);
        }, 1000);
      }
    } catch (err) {
      if (!err.response) {
        setLoading(false);
        setStatusMessage({
          text: "No response from the server or something wrong with your internet connection",
          color: "red",
        });
      } else {
        setLoading(false);
        setStatusMessage({
          text: err.response.data,
          color: "red",
        });
      }
    }
  };

  return (
    <>
      <Tooltip title="Add new project to work on">
        <ButtonBase
          onClick={() => {
            setAimateButton(true);
            setOpen(true);
          }}
          sx={{
            position: "fixed",
            top: "100px",
            right: `${sm ? 0 : "40px"}`,
            marginLeft: "auto",
            boxShadow: 3,
            transition: "all 300ms",
            borderRadius: "10px",
            animation: `${
              animateButton
                ? `${addButtonSpinForwards} 1s forwards`
                : `${addButtonSpinBackwards} 1s`
            }`,
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
        onClose={() => {
          setOpen(false);
          setAimateButton(false);
        }}
      >
        <DialogTitle>Add new project</DialogTitle>
        <DialogContent
          sx={{
            width: `${sm ? "80vw" : "450px"}`,
          }}
        >
          <StatusMessage loading={loading} message={statusMessage} />
          <form
            id="add-goal"
            onSubmit={(e) => {
              e.preventDefault();
              addProject();
            }}
          >
            <TextField
              name="projectName"
              onChange={(e) => {
                handleSetProject(e);
              }}
              value={project.projectName}
              sx={{ margin: "20px 0" }}
              fullWidth
              required
              label="Project Name"
              inputProps={{ maxLength: 20 }}
            />
            <TextField
              name="description"
              onChange={(e) => {
                handleSetProject(e);
              }}
              value={project.description}
              sx={{ margin: "20px 0" }}
              fullWidth
              required
              label="Description"
              multiline
              rows={4}
              inputProps={{ maxLength: 200 }}
            />
            <SubmitButton loading={loading} content={<Check />} />
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewProject;

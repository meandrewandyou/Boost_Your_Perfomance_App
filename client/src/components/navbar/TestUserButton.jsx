import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";

const RestoreUser = () => {
  // Temporary component. redux-persist stores all the redux states. If smth goes wrong
  // , just update user here and use the button in the NavBar
  const testUserData = {
    userName: "User1",
    accessToken: "",
    projects: [
      {
        projectName: "Project1",
        id: 1,
        description: "Lorem Ipsum",
        goals: [
          { text: "Add some feature", checked: false },
          { text: "Beautify", checked: false },
          { text: "Optimize", checked: false },
          { text: "Make responsive", checked: true },
          { text: "Add another feature", checked: false },
        ],
        subProjects: [],
        sessions: [
          { argument: "Medium", value: 0, seconds: 10 },
          { argument: "Long", value: 0, seconds: 15 },
          { argument: "Short", value: 0, seconds: 5 },
        ],
        totalWorkTime: 0,
      },
      {
        projectName: "Project2",
        id: 2,
        description: "Lorem Ipsum",
        goals: [
          { text: "Add some feature", checked: true },
          { text: "Beautify", checked: true },
          { text: "Optimize", checked: false },
        ],
        subProjects: [],
        sessions: [
          { argument: "Medium", value: 0, seconds: 10 },
          { argument: "Long", value: 0, seconds: 15 },
          { argument: "Short", value: 0, seconds: 5 },
        ],
        totalWorkTime: 0,
      },
      {
        projectName: "Project3",
        id: 3,
        description: "Lorem Ipsum",
        goals: [
          { text: "Add some feature", checked: true },
          { text: "Beautify", checked: true },
          { text: "Optimize", checked: true },
          { text: "Make responsive", checked: true },
          { text: "Add another feature", checked: false },
        ],
        subProjects: [],
        sessions: [
          { argument: "Medium", value: 0, seconds: 10 },
          { argument: "Long", value: 0, seconds: 15 },
          { argument: "Short", value: 0, seconds: 5 },
        ],
        totalWorkTime: 0,
      },
      {
        projectName: "Project4",
        description: "Lorem Ipsum",
        id: 4,
        goals: [
          { text: "Add some feature", checked: false },
          { text: "Beautify", checked: true },
          { text: "Optimize", checked: false },
          { text: "Make responsive", checked: true },
          { text: "Add another feature", checked: false },
        ],
        subProjects: [],
        sessions: [
          { argument: "Medium", value: 0, seconds: 10 },
          { argument: "Long", value: 0, seconds: 15 },
          { argument: "Short", value: 0, seconds: 5 },
        ],
        totalWorkTime: 0,
      },
    ],
  };

  const dispatch = useDispatch();

  const handleChangeUser = () => {
    dispatch(setUser(testUserData));
  };

  return (
    <>
      <Button variant="contained" color="error" onClick={handleChangeUser}>
        Restore user.
      </Button>
    </>
  );
};

export default RestoreUser;

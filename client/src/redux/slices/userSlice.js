import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "User1",
  accessToken: "",
  projects: [
    {
      projectName: "Project1",
      id: 1,
      description: "Loperm Ipsum",
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
      description: "Loperm Ipsum",
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
      description: "Loperm Ipsum",
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
      description: "Loperm Ipsum",
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

const userSlice = createSlice({
  name: "loggedUserState",
  initialState,
  reducers: {
    addGoal: (state, action) => [...state.goals, action.payload],
    changeUser: (state, action) => action.payload,
    updateProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { addGoal, changeUser, updateProjects } = userSlice.actions;

export default userSlice.reducer;

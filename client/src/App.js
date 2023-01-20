import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { themeDark, themeLight } from "./additionalStuff/styledMuiComponents";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/";

function App() {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

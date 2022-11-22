import { CssBaseline, ThemeProvider} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";


import Footer from "./components/Footer";
import ProjectBoard from "./components/ProjectsBoard";
import { themeDark, themeLight } from "./additionalStuff/styledMuiComponents";
import NavBar from "./components/navbar/NavBar";



function App() {

  const darkMode = useSelector((state)=>state.darkMode.value)

  return (
  <ThemeProvider theme={darkMode ? themeDark : themeLight}>
    <CssBaseline/>
    <NavBar/>
    <ProjectBoard/>
    <Footer/>
  </ThemeProvider>
  )
  
}

export default App;

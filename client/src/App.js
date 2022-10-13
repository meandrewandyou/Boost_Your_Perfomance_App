import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";


import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectBoard from "./components/ProjectsBoard";

function App() {

  const darkMode = useSelector((state)=>state.darkMode.value)
  const themeLight = createTheme({  
    components: {MuiCardActionArea: { 
      styleOverrides: {
        root: {fontFamily: "monospace", fontSize: "20px", textAlign: "center"}   
    }      
},},    
    typography:{
      allVariants: {      fontFamily: "monospace",
    },
      h3:{
        fontFamily: "'Macondo', cursive",
        fontWeight: 600,
        color: "#483838",

      }
    },
    palette: {
      background: {
        default: "#F7A76C",
        paper: "#E0D98C",
      },
      primary: {
        main: "#EC7272",
        light: "#C3FF99",

      },
      secondary: {
        main: "#F7A76C"
      },
      action: {
        disabled: '#F7A76C'
      },
    }
  },
  )
  const themeDark = createTheme({
    components: {MuiCardActionArea: { 
      styleOverrides: {
        root: {fontFamily: "monospace", fontSize: "20px", textAlign: "center"}   
    }      
},},
    typography:{
      allVariants: {      fontFamily: "monospace",
    },

      h3:{
        fontFamily: "'Macondo', cursive",
        fontWeight: 600,
        color: "#483838",

      }
    },
    palette: {
      background: {
        default: "#483838",
        paper: "#90B77D"

      },
      primary: {
        main: "#42855B",
        light: "#D2D79F"

      },
      secondary: {
        main: "#483838"
      },
      action: {
        disabled: '#483838'
      }
    },
  },
  )
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

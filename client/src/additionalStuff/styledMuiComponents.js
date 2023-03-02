import { Button, createTheme, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import darkImage from "./pics/night_forest.jpg";
import lightImage from "./pics/desert.jpg";

const themeLight = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // To get rid of browser's default form autofill color I'll use this
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #E0D98C inset",
              WebkitTextFillColor: "default",
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: "100%",
          width: "100%",
          backgroundImage: `url(${lightImage})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          transition: "all 1s",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: "0px",
          },
        },
        html: {
          height: "100%",
        },
      },
    },
    MuiCard: {
      styleOverrides: { root: { backgroundColor: "rgba(224, 217, 140, 0.5)" } },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          fontFamily: "monospace",
          fontSize: "20px",
          textAlign: "center",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: { root: { backgroundColor: "rgba(236, 114, 114, 0.5)" } },
    },
  },
  typography: {
    allVariants: { fontFamily: "monospace" },
    h3: {
      fontFamily: "'Macondo', cursive",
      fontWeight: 600,
      color: "#483838",
    },
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
      main: "#F7A76C",
    },
    action: {
      disabled: "#F7A76C",
    },
  },
});
const themeDark = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #90B77D inset",
              WebkitTextFillColor: "default",
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: { root: { backgroundColor: "rgba(144, 183, 125, 0.5)" } },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: "100%",
          width: "100%",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          backgroundImage: `url(${darkImage})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          transition: "all 1s",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: "0px",
          },
        },
        html: {
          height: "100%",
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          fontFamily: "monospace",
          fontSize: "20px",
          textAlign: "center",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: { root: { backgroundColor: "rgba(66, 133, 91, 0.5)" } },
    },
  },
  typography: {
    allVariants: { fontFamily: "monospace" },

    h3: {
      fontFamily: "'Macondo', cursive",
      fontWeight: 600,
      color: "#483838",
    },
  },
  palette: {
    background: {
      default: "#483838",
      paper: "#90B77D",
    },
    primary: {
      main: "#42855B",
      light: "#D2D79F",
    },
    secondary: {
      main: "#483838",
    },
    action: {
      disabled: "#483838",
    },
  },
});

const TimerButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "hoverColor",
})(({ hoverColor, theme }) => ({
  color: "black",
  backgroundColor: theme.palette.primary.light,
  "&:hover": { backgroundColor: hoverColor },
}));

const RegisterFormButton = styled(Button)(({ theme }) => ({
  width: "auto",
  flex: 1,
  backgroundColor: theme.palette.primary.light,
  margin: "5px 0 5px 0",
  color: theme.palette.primary.main,
}));

const EditableTextInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: theme.palette.text.primary,
  },
}));

const OverallTypography = styled(Typography)(({ theme }) => ({
  margin: "5px 0 5px 10px",
  color: theme.palette.primary.main,
}));

const HeaderTypography = styled(Typography)(({ theme }) => ({
  transition: `all 500ms`,
  paddingLeft: "1em",
  position: "absolute",
  paddingTop: "8px",
  cursor: "default",
  userSelect: "none",
  color: theme.palette.primary.light,
}));

export {
  TimerButton,
  RegisterFormButton,
  OverallTypography,
  HeaderTypography,
  themeLight,
  themeDark,
  EditableTextInput,
};

import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const TimerButton = styled(Button, {shouldForwardProp: (prop) => prop !== 'hoverColor'})(({hoverColor, theme})=>({
 color: "black",
 backgroundColor: theme.palette.primary.light,   
"&:hover": {backgroundColor: hoverColor}
}));



const RegisterFormButton = styled(Button)(({theme})=>({
    width: "auto",
    flex: 1,
    backgroundColor: theme.palette.primary.light,
    margin: "5px 0 5px 0",
    color: theme.palette.primary.main
  }));

  const OverallTypography = styled(Typography)(({theme})=>({
    margin: "5px 0 5px 10px",
    color: theme.palette.primary.main
  }));


  const HeaderTypography = styled(Typography)({
    transition: `all 500ms`,
    paddingLeft: "1em",
    position: "absolute",
    paddingTop: "8px",
    cursor: "default",
    userSelect: "none",
  });

export {TimerButton, RegisterFormButton, OverallTypography, HeaderTypography};

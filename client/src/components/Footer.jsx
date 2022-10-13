import { ButtonBase, Paper, Slide, Typography, keyframes } from "@mui/material";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  var appearAnimation = keyframes`
    0% { transform: scale(1); position: relative; bottom: 0 }
    50% { transform: scale(4); position: relative; bottom: 10rem; }
    70% { transform: scale(1); position: relative; bottom: 0}
    80% { color: white; transform: scale(2) }
    90% { color: black; transform: scale(1) }
    95% { color: white; transform: scale(2) }
    100% { color: default; transform: scale(1)}

`;
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          position: "fixed",
          bottom: 0,
          textAlign: "center",
          width: "100%",
          opacity: 0.5,
        }}
      >
        <Slide timeout={1500} direction="right" in={true}>
          <ButtonBase href="https://github.com/meandrewandyou" target="_blank">
            <Typography
              sx={{
                animation: `${appearAnimation} 2s`,
              }}
              variant="caption"
            >{`Andrew was here © ${year}`}</Typography>
          </ButtonBase>
        </Slide>
      </Paper>
    </>
  );
};

export default Footer;

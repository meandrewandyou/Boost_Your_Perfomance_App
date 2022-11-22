import React from "react";
import { ButtonBase, Paper, Slide, Typography } from "@mui/material";
import { appearFooterTextAnimation } from "../additionalStuff/animations";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          textAlign: "center",
          width: "100%",
          opacity: 0.9,
          zIndex: 1000,
        }}
      >
        <Slide timeout={1500} direction="right" in={true}>
          <ButtonBase href="https://github.com/meandrewandyou" target="_blank">
            <Typography
              sx={{
                animation: `${appearFooterTextAnimation} 2s`,
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

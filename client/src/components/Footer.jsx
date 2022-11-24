import React from "react";
import { ButtonBase, Paper, Slide, Typography } from "@mui/material";

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
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <Slide timeout={1500} direction="right" in={true}>
          <ButtonBase href="https://github.com/meandrewandyou" target="_blank">
            <Typography variant="caption">{`Andrew was here © ${year}`}</Typography>
          </ButtonBase>
        </Slide>
      </Paper>
    </>
  );
};

export default Footer;

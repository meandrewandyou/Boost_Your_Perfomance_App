import {
  Button,
  ButtonBase,
  ButtonGroup,
  Paper,
  Slide,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Timer from "./Timer";
import { useDispatch, useSelector } from "react-redux";
import { timerOnOff } from "../redux/slices/timerState";

const CardReview = () => {
  const [time, setTime] = useState();

  const dispatch = useDispatch();
  const timerState = useSelector((state) => state.timerState.value);

  const setSession = (amount) => {
    const currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() + amount);
    setTime(currentTime);
    dispatch(timerOnOff(true));
  };

  return (
    <>
      <Slide timeout={500} direction="left" in={true}>
        <Paper elevation={8}>
          <ButtonBase sx={{ margin: "15px" }}>
            <Typography variant="h4" sx={{ color: "primary.main" }}>
              Sub-projects: 5
            </Typography>
          </ButtonBase>
          <ButtonBase sx={{ margin: "0 0 15px 15px" }}>
            <Typography variant="h4" sx={{ color: "primary.main" }}>
              Goals/achieved: 5/17
            </Typography>
          </ButtonBase>
          <ButtonBase sx={{ margin: "0 0 15px 15px" }}>
            <Typography variant="h4" sx={{ color: "primary.main" }}>
              Total work time: 13h
            </Typography>
          </ButtonBase>
          <Box spacing={3} sx={{ textAlign: "center", padding: "20px" }}>
            <Typography>Start work session</Typography>
            <ButtonGroup>
              <Button
                onClick={() => {
                  setSession(5);
                }}
              >
                Chill
              </Button>
              <Button
                onClick={() => {
                  setSession(10);
                }}
              >
                Medium
              </Button>
              <Button
                onClick={() => {
                  setSession(15);
                }}
              >
                Advanced
              </Button>
            </ButtonGroup>
            {timerState && <Timer expiryTimestamp={time} />}
          </Box>
        </Paper>
      </Slide>
    </>
  );
};

export default CardReview;

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTimer } from "react-timer-hook";
import { useDispatch } from "react-redux";
import { timerOnOff } from "../redux/slices/timerState";

const Timer = ({ expiryTimestamp }) => {
  const dispatch = useDispatch();
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      window.alert("Stop!");
      dispatch(timerOnOff(false));
    },
  });

  return (
    <>
      <Box>
        <Typography>{`Time left: ${minutes}m ${seconds}s`}</Typography>
      </Box>
    </>
  );
};

export default Timer;

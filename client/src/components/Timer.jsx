import React, { useMemo } from "react";
import { Box, ButtonGroup, IconButton, Typography } from "@mui/material";
import { useTimer } from "react-timer-hook";
import { useDispatch, useSelector } from "react-redux";
import { timerOnOff } from "../redux/slices/timerState";
import { updateProjects } from "../redux/slices/userSlice";
import {
  PauseCircleFilledOutlined,
  PlayCircleFilledOutlined,
} from "@mui/icons-material";
import { thatHappensInTheEndOfSession } from "../additionalStuff/helperFunctions";

const Timer = ({ expiryTimestamp, sessions, projectId, progressBarColor }) => {
  const sessionLength = useMemo(() => {
    return Math.ceil((expiryTimestamp - Date.now()) / 1000);
  }, [expiryTimestamp]);

  const loggedUserProjects = useSelector(
    (state) => state.loggedUserState.projects
  );
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
      thatHappensInTheEndOfSession(
        sessions,
        sessionLength,
        loggedUserProjects,
        projectId,
        dispatch,
        timerOnOff,
        updateProjects
      );
    },
  });

  const progressBarWidth = () => {
    return 100 - (seconds / sessionLength) * 100;
  };

  return (
    <>
      <Box>
        <Typography
          sx={{
            position: "relative",
            marginTop: "5px",
            "&::after": {
              backgroundColor: `${progressBarColor}`,
              content: `""`,
              width: `${progressBarWidth()}%`,
              height: "100%",
              position: "absolute",
              left: 0,
              bottom: 0,
              zIndex: -1,
              transition: "all 1s",
              borderRadius: "10px",
              opacity: 0.9,
            },
          }}
        >{`Time left: ${hours}h ${minutes}m ${seconds}s`}</Typography>
        <ButtonGroup>
          <IconButton onClick={pause}>
            <PauseCircleFilledOutlined />
          </IconButton>
          <IconButton onClick={resume}>
            <PlayCircleFilledOutlined />
          </IconButton>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default Timer;

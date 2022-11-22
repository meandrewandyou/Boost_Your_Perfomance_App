import { ButtonGroup, Paper, Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { timerOnOff } from "../../redux/slices/timerState";
import Timer from "./Timer";

import {
  OverallTypography,
  TimerButton,
} from "../../additionalStuff/styledMuiComponents";

const CardReview = ({ goals, sessions, projectId, totalWorkTime }) => {
  const dispatch = useDispatch();

  const [expiryTimestamp, setExpiryTimestamp] = useState();
  const [timerOnCurrentCard, setTimerOnCurrentCard] = useState(false);
  const [progressBarColor, setProgressBarColor] = useState();

  const timerState = useSelector((state) => state.timerState.value);

  const setSession = (amount) => {
    const currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() + amount);
    setExpiryTimestamp(currentTime);
    dispatch(timerOnOff(true));
    // Look, we need 2 states of timer. One global - to disable all the buttons while timer is on
    // and one local, to render timer component only on selected card.
    // Timeout is to make sure global state updates first. Why? Take a look at useEffect
    setTimeout(() => {
      setTimerOnCurrentCard(true);
    }, 100);
  };

  const completedGoals = goals.filter((goal) => goal.checked === true);

  useEffect(() => {
    setTimerOnCurrentCard(false);
  }, [timerState]);

  return (
    <>
      <Slide timeout={500} direction="left" in={true}>
        <Paper
          elevation={8}
          sx={{
            position: "relative",
            zIndex: 10,
            opacity: 0.8,
            padding: "5px",
          }}
        >
          <OverallTypography variant="h5">Sub-projects: 5</OverallTypography>
          <OverallTypography variant="h5">
            {`Achieved/total goals: ${completedGoals.length}/${goals.length}`}
          </OverallTypography>
          <OverallTypography variant="h5">
            {`Total work time: ${totalWorkTime}s`}{" "}
          </OverallTypography>
          <Box spacing={3} sx={{ textAlign: "center", padding: "20px" }}>
            <Typography>Start work session</Typography>
            <ButtonGroup>
              <TimerButton
                hoverColor="#9BCB66"
                disabled={timerState}
                onClick={(hoverColor) => {
                  setSession(5);
                  setProgressBarColor("#9BCB66");
                }}
              >
                Short
              </TimerButton>
              <TimerButton
                hoverColor="#46A6EF"
                disabled={timerState}
                onClick={() => {
                  setSession(10);
                  setProgressBarColor("#46A6EF");
                }}
              >
                Medium
              </TimerButton>
              <TimerButton
                hoverColor="#F97446"
                disabled={timerState}
                onClick={() => {
                  setSession(15);
                  setProgressBarColor("#F97446");
                }}
              >
                Long
              </TimerButton>
            </ButtonGroup>
            {timerOnCurrentCard && timerState && (
              <Timer
                sessions={sessions}
                projectId={projectId}
                expiryTimestamp={expiryTimestamp}
                progressBarColor={progressBarColor}
              />
            )}
          </Box>
        </Paper>
      </Slide>
    </>
  );
};

export default CardReview;

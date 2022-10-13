import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Typography,
  Slide,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import Goals from "./Goals";
import PieChart from "./PieChart";
import CardReview from "./CardReview";

import { useSelector } from "react-redux";

// Make all other buttons inactive while timer is on. Make start timer false on useEffect
// Add timer state to redux
// Make background of the div gradient. The percent depends on percent of completed tasks
// All that info got to be saved in user's redux store. User info + all projects info

const ProjectCard = () => {
  const [tab, setTab] = useState("overall");

  const data = [
    { argument: "light", value: 5 },
    { argument: "normal", value: 12 },
    { argument: "fast", value: 3 },
  ];

  const timerState = useSelector((state) => state.timerState.value);

  return (
    <>
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            margin: "30px 0 30px 0",
          }}
        >
          <Card
            elevation={8}
            sx={{
              height: "640px",
              overflow: "hidden",
              // background:
              //   "linear-gradient(to bottom right, #FFE9A0 40%,  #CC3636 60%)",
            }}
          >
            <CardHeader
              titleTypographyProps={{
                textAlign: "center",
                fontFamily: "'Macondo', cursive",
                fontWeight: 1000,
              }}
              title="Header"
            />
            <CardActions>
              <CardActionArea
                disabled={timerState}
                onClick={() => {
                  setTab("overall");
                }}
              >
                Overall
              </CardActionArea>
              <CardActionArea
                disabled={timerState}
                onClick={() => {
                  setTab("statistics");
                }}
              >
                Statistics
              </CardActionArea>
              <CardActionArea
                disabled={timerState}
                onClick={() => {
                  setTab("goals");
                }}
              >
                Goals
              </CardActionArea>
              <CardActionArea
                disabled={timerState}
                onClick={() => {
                  setTab("info");
                }}
              >
                Description
              </CardActionArea>
            </CardActions>
            <CardContent>
              {tab === "info" && (
                <Slide timeout={500} direction="left" in={true}>
                  <Paper elevation={8} sx={{ padding: "1rem" }}>
                    <Typography variant="h5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                  </Paper>
                </Slide>
              )}

              {tab === "goals" && (
                <Slide timeout={500} direction="left" in={true}>
                  <Paper
                    sx={{
                      padding: "1rem",
                    }}
                    elevation={8}
                  >
                    <Goals />
                  </Paper>
                </Slide>
              )}
              {tab === "overall" && <CardReview />}
              {tab === "statistics" && (
                <Paper elevation={8}>
                  <PieChart data={data} />
                </Paper>
              )}
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default ProjectCard;

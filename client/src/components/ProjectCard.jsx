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
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import Goals from "./Goals";
import ProjectPieChart from "./PieChart";
import CardReview from "./CardReview";

import { appearStarAnimation } from "../additionalStuff/animations";
import { progressColor } from "../additionalStuff/helperFunctions";

const ProjectCard = (props) => {
  const {
    projectName,
    description,
    goals,
    sessions,
    projectId,
    totalWorkTime,
  } = props;
  const [tab, setTab] = useState("overall");
  const [animate, setAnimate] = useState(false);

  const timerState = useSelector((state) => state.timerState.value);

  const percentOfCompletion = useMemo(() => {
    const completedGoals = goals.filter((goal) => goal.checked === true);
    const completedPercent = (completedGoals.length / goals.length) * 100;
    return completedPercent;
  }, [goals]);

  // React has no idea that this dependency is absolutely necessary
  const borderShape1 = useMemo(() => {
    return ~~(Math.random() * (95 - 5) + 5);
  }, [goals]);
  const borderShape2 = useMemo(() => {
    return ~~(Math.random() * (95 - 10) + 10);
  }, [goals]);

  // To animate star only when percentOfCompletion reaches 100% and not to animate it
  // on render when percent is already 100%, I'll pass this func to Goals component
  // and execute it onChange of checkbox only.
  const updateAnimate = () => {
    percentOfCompletion === 100 && setAnimate(true);
  };

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
              position: "relative",
              "&:before": {
                backgroundColor: `${progressColor(percentOfCompletion)}`,
                content: `""`,
                width: "100%",
                height: `${percentOfCompletion}%`,
                position: "absolute",
                right: 0,
                bottom: 0,
                zIndex: 1,
                transition: "all 1s",
                borderRadius: `${
                  percentOfCompletion === 100
                    ? 0
                    : `${borderShape1}% ${borderShape2}% 0 0`
                }`,
              },
            }}
          >
            <Typography
              sx={{
                position: "relative",
                marginRight: "10px",
                float: "right",
                zIndex: 110,
                fontSize: "30px",
                marginTop: "5px",
                display: "block",
                opacity: `${percentOfCompletion === 100 ? 1 : 0}`,
                transition: "all 1s",
                animation: `${
                  percentOfCompletion === 100 && animate && appearStarAnimation
                } 2s`,
              }}
            >
              ⭐
            </Typography>
            <CardHeader
              titleTypographyProps={{
                textAlign: "center",
                fontFamily: "'Macondo', cursive",
                fontWeight: 1000,
                position: "relative",
                zIndex: 10,
              }}
              title={projectName}
            />
            <CardActions sx={{ position: "relative", zIndex: 10 }}>
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
                  <Paper
                    elevation={8}
                    sx={{
                      padding: "1rem",
                      position: "relative",
                      zIndex: 10,
                      opacity: 0.8,
                    }}
                  >
                    <Typography variant="h5">{description}</Typography>
                  </Paper>
                </Slide>
              )}

              {tab === "goals" && (
                <Goals
                  updateAnimate={updateAnimate}
                  goals={goals}
                  projectId={projectId}
                />
              )}
              {tab === "overall" && (
                <CardReview
                  projectId={projectId}
                  sessions={sessions}
                  goals={goals}
                  totalWorkTime={totalWorkTime}
                />
              )}
              {tab === "statistics" && <ProjectPieChart sessions={sessions} />}
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default ProjectCard;

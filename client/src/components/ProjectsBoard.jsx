import { Grid } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectBoard = () => {
  const data = [1, 2, 3, 4];

  return (
    <>
      <Grid container>
        <Grid lg={2} item></Grid>
        <Grid lg={8} item>
          <Grid container spacing={3}>
            {data.map((item, i) => (
              <ProjectCard key={i} />
            ))}
          </Grid>
        </Grid>
        <Grid lg={2} item></Grid>
      </Grid>
    </>
  );
};

export default ProjectBoard;

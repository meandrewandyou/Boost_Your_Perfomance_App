import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AddNewProject from "./AddNewProject";
import ProjectCard from "./ProjectCard";

const ProjectBoard = () => {
  const loggedUserProjects = useSelector(
    (state) => state.loggedUserState.projects
  );

  return (
    <>
      <AddNewProject />
      <Grid container>
        <Grid lg={2} item></Grid>
        <Grid lg={8} item>
          <Grid container spacing={3}>
            {loggedUserProjects.map((project, i) => (
              <ProjectCard
                totalWorkTime={project.totalWorkTime}
                projectId={project.id}
                subProjects={project.subprojects}
                goals={project.goals}
                projectName={project.projectName}
                description={project.description}
                sessions={project.sessions}
                key={project.id}
              />
            ))}
          </Grid>
        </Grid>
        <Grid lg={2} item></Grid>
      </Grid>
    </>
  );
};

export default ProjectBoard;

import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AddNewProject from "./AddNewProject";
import ProjectCard from "./project-card/ProjectCard";

const ProjectBoard = () => {
  const loggedUserProjects = useSelector(
    (state) => state.loggedUserState.projects
  );

  return (
    <>
      <AddNewProject />
      <Grid container>
        <Grid xs={1} md={2} item></Grid>
        <Grid xs={10} md={8} item>
          <Grid justifyContent="center" container spacing={3}>
            {loggedUserProjects.map((project) => (
              <ProjectCard
                totalWorkTime={project.totalWorkTime}
                projectId={project.id}
                subProjects={project.subprojects}
                goals={project.goals}
                projectName={project.projectName}
                description={project.description}
                sessions={project.sessions}
                key={project._id}
              />
            ))}
          </Grid>
        </Grid>
        <Grid xs={1} md={2} item></Grid>
      </Grid>
    </>
  );
};

export default ProjectBoard;

import { HelpCenter } from "@mui/icons-material";
import { Box, ButtonBase, ListItem, Tooltip } from "@mui/material";
import React from "react";
import CheckBox from "./CheckBox";
import DeleteGoalButton from "./DeleteGoalButton";

const GoalsListItem = ({
  id,
  item,
  goals,
  loggedUserProjects,
  projectId,
  loggedUser,
  updateAnimate,
}) => {
  const requestData = {
    loggedUser,
    projectId,
    goalId: id,
  };

  return (
    <>
      <ListItem
        disableGutters
        sx={{
          textDecoration: `${item.checked ? "line-through" : "none"}`,
        }}
        secondaryAction={
          <Box>
            <CheckBox
              loggedUserProjects={loggedUserProjects}
              projectId={projectId}
              goals={goals}
              requestData={requestData}
              updateAnimate={updateAnimate}
              item={item}
            />
            <DeleteGoalButton
              loggedUserProjects={loggedUserProjects}
              projectId={projectId}
              goals={goals}
              requestData={requestData}
              updateAnimate={updateAnimate}
              item={item}
            />
            <Tooltip
              placement="right-start"
              title={
                item.description === ""
                  ? "You have no description for this goal"
                  : item.description
              }
            >
              <ButtonBase
                sx={{
                  cursor: "default",
                  "&:hover": {
                    color: "info.dark",
                  },
                }}
              >
                <HelpCenter />
              </ButtonBase>
            </Tooltip>
          </Box>
        }
      >
        {item.text}
      </ListItem>
    </>
  );
};

export default GoalsListItem;

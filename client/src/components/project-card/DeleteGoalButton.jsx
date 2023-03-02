import { DeleteForever } from "@mui/icons-material";
import { ButtonBase, CircularProgress, Tooltip } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setGoals } from "../../redux/slices/userSlice";

const DeleteGoalButton = ({ loggedUserProjects, projectId, requestData }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteGoal = async () => {
    setLoading(true);
    const projectIndex = loggedUserProjects.findIndex(
      (project) => project._id === projectId
    );

    try {
      const response = await axios.post("user/deleteGoal", requestData);

      if (response && response.status === 200) {
        dispatch(setGoals({ index: projectIndex, goals: response.data }));
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      err.response
        ? window.alert(err.response.data)
        : window.alert(
            "No response from the server or something wrong with your internet connection"
          );
    }
  };

  return (
    <>
      {loading ? (
        <CircularProgress size={14} sx={{ margin: "0px 10px 0px 5px" }} />
      ) : (
        <Tooltip title="delete" placement="top-start">
          <ButtonBase
            onClick={() => {
              handleDeleteGoal();
            }}
            sx={{
              margin: "0 5px",
              "&:hover": { color: "error.light" },
            }}
          >
            <DeleteForever />
          </ButtonBase>
        </Tooltip>
      )}
    </>
  );
};

export default DeleteGoalButton;

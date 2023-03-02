import { Checkbox, CircularProgress, Tooltip } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkGoal } from "../../redux/slices/userSlice";

const CheckBox = ({
  loggedUserProjects,
  projectId,
  goals,
  requestData,
  updateAnimate,
  item,
}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleCheked = async (e) => {
    setLoading(true);
    const projectIndex = loggedUserProjects.findIndex(
      (project) => project._id === projectId
    );
    const goalIndex = goals.findIndex((goal) => goal._id === item._id);
    try {
      const response = await axios.post("/user/checkGoal", requestData);
      if (response && response.status === 200) {
        dispatch(checkGoal({ goalIndex, projectIndex }));
        setLoading(false);
        updateAnimate();
      }
    } catch (err) {
      err.response
        ? window.alert(err.response.data)
        : window.alert(
            "No response from the server or something wrong with your internet connection"
          );
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <CircularProgress size={14} />
      ) : (
        <Tooltip
          title={!item.checked ? "mark as completed" : "unmark"}
          placement="left-start"
        >
          <Checkbox
            edge="end"
            onChange={(e) => {
              handleCheked(e);
            }}
            checked={item.checked}
          />
        </Tooltip>
      )}
    </>
  );
};

export default CheckBox;

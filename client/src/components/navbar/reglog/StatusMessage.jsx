import { Typography, Zoom } from "@mui/material";
import React from "react";

const StatusMessage = ({ message, loading }) => {
  return (
    <Zoom
      appear={false}
      children={
        <Typography
          sx={{ color: `${message.color}` }}
        >{`${message.text}`}</Typography>
      }
      in={!loading}
    />
  );
};

export default StatusMessage;

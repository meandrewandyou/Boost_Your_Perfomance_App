import { CircularProgress } from "@mui/material";
import React from "react";
import { RegisterFormButton } from "../../../additionalStuff/styledMuiComponents";

const SubmitButton = ({ loading, content }) => {
  return (
    <RegisterFormButton
      sx={{ margin: "20px 0" }}
      disabled={loading}
      variant="contained"
      type="submit"
    >
      {loading ? <CircularProgress thickness={12} size={14} /> : content}
    </RegisterFormButton>
  );
};

export default SubmitButton;

import React from "react";
import { FormControl, TextField, Typography } from "@mui/material";
import { RegisterFormButton } from "../../additionalStuff/styledMuiComponents";

const Login = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submited");
      }}
    >
      <FormControl fullWidth>
        <Typography>Enter credentials</Typography>
        <TextField
          sx={{ marginTop: "10px" }}
          required
          variant="filled"
          label="Username"
        />
        <TextField
          key={4}
          sx={{ marginTop: "10px" }}
          required
          variant="filled"
          label="Password"
        />
        <RegisterFormButton variant="contained" type="submit">
          Submit
        </RegisterFormButton>
      </FormControl>
    </form>
  );
};

export default Login;

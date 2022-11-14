import React from "react";
import { FormControl, TextField, Tooltip, Typography } from "@mui/material";
import { RegisterFormButton } from "../additionalStuff/styledMuiComponents";

const Register = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submited");
      }}
    >
      <FormControl fullWidth>
        <Typography>Create your account</Typography>
        <TextField
          sx={{ marginTop: "10px" }}
          fullWidth
          required
          variant="filled"
          label="Username"
        />
        <TextField
          sx={{ marginTop: "10px" }}
          required
          variant="filled"
          label="Password"
        />
        <Tooltip
          placement="right"
          title="It's better be real. No spam - guaranteed. Restore password opportunity? Maybe)"
        >
          <TextField
            sx={{ marginTop: "10px", marginBottom: "10px" }}
            type="email"
            required
            variant="filled"
            label="Email"
          />
        </Tooltip>

        <RegisterFormButton variant="contained" type="submit">
          Submit
        </RegisterFormButton>
      </FormControl>
    </form>
  );
};

export default Register;

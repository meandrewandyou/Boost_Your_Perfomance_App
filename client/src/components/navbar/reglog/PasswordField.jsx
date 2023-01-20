import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const PasswordField = ({ onChangeFunction }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      onChange={(e) => {
        onChangeFunction(e);
      }}
      sx={{ marginTop: "10px" }}
      required
      variant="outlined"
      label="Password"
      name="password"
      type={showPassword ? "text" : "password"}
      inputProps={{ minLength: 8 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="password"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;

import React, { useState } from "react";
import { FormControl, TextField, Tooltip } from "@mui/material";
import axios from "axios";
import PasswordField from "./PasswordField";
import SubmitButton from "./SubmitButton";
import StatusMessage from "./StatusMessage";

const Register = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [statusMessage, setStatusMessage] = useState({
    text: "Create an account",
    color: "default",
  });
  const [loading, setLoading] = useState(false);

  const handleSetUserData = (e) => {
    const value = e.target.value;
    setUserData({ ...userData, [e.target.name]: value });
  };

  const registerUserRequest = async () => {
    setLoading(true);
    try {
      const response = await axios.post("user/register", userData);
      if (response && response.status === 200) {
        setStatusMessage({ text: response.data, color: "green" });
        setLoading(false);
      }
    } catch (err) {
      if (!err.response) {
        setStatusMessage({
          text: "No response from the server or something wrong with your internet connection",
          color: "red",
        });
        setLoading(false);
        return;
      } else {
        setStatusMessage({ text: err.response.data, color: "red" });
        setLoading(false);
      }
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        registerUserRequest();
      }}
    >
      <FormControl fullWidth>
        <StatusMessage loading={loading} message={statusMessage} />
        <TextField
          onChange={(e) => {
            handleSetUserData(e);
          }}
          sx={{
            marginTop: "10px",
          }}
          fullWidth
          required
          variant="outlined"
          label="Username"
          name="userName"
          inputProps={{ maxLength: 12 }}
        />
        <PasswordField onChangeFunction={handleSetUserData} />
        <Tooltip
          placement="right"
          title="It's better be real. No spam - guaranteed. Restore password opportunity? Maybe)"
        >
          <TextField
            onChange={(e) => {
              handleSetUserData(e);
            }}
            sx={{ marginTop: "10px" }}
            type="email"
            required
            variant="outlined"
            label="Email"
            name="email"
          />
        </Tooltip>
        <SubmitButton loading={loading} content={"Submit"} />
      </FormControl>
    </form>
  );
};

export default Register;

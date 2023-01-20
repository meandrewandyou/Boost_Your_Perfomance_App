import React, { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import PasswordField from "./PasswordField";
import SubmitButton from "./SubmitButton";
import axios from "axios";
import StatusMessage from "./StatusMessage";
import { setUser } from "../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = ({ setClicked }) => {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });
  const [statusMessage, setStatusMessage] = useState({
    text: "Enter credentials",
    color: "default",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSetCredentials = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const loginUser = async () => {
    setLoading(true);
    try {
      const response = await axios.post("user/login", credentials);
      if (response && response.status === 200) {
        dispatch(setUser(response.data));
        setStatusMessage({ text: "Welcome!", color: "green" });
        setLoading(false);
        setTimeout(() => {
          setClicked(false);
          navigate("/project_board");
        }, 1000);
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
        setStatusMessage({
          text: err.response.data,
          color: "red",
        });
        setLoading(false);
      }
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        loginUser();
      }}
    >
      <FormControl fullWidth>
        <StatusMessage loading={loading} message={statusMessage} />
        <TextField
          onChange={(e) => {
            handleSetCredentials(e);
          }}
          sx={{ marginTop: "10px" }}
          required
          variant="outlined"
          label="Username"
          name="userName"
        />
        <PasswordField onChangeFunction={handleSetCredentials} />
        <SubmitButton loading={loading} content={"Submit"} />
      </FormControl>
    </form>
  );
};

export default Login;

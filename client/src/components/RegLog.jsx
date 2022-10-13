import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import React, { useState } from "react";
import { useEffect } from "react";

const RegLog = (props) => {
  const { clicked, setClicked } = props;
  const [registerTab, setRegisterTab] = useState(true);
  const [greetingsText, setGreetingsText] = useState("");

  const StyledButton = styled(Button)({
    width: "auto",
    flex: 1,
    backgroundColor: "primary.light",
    margin: "5px 0 5px 0",
  });

  useEffect(() => {
    const hour = new Date().getHours();
    switch (true) {
      case hour >= 12 && hour < 17:
        setGreetingsText("Good afternoon! 🌞 Glad to see you!");
        break;
      case hour >= 17 && hour < 23:
        setGreetingsText("Good evening! 🌅 Glad to see you!");
        break;
      case hour >= 23 || (hour >= 0 && hour < 5):
        setGreetingsText("Night owl time! 🦉 Have a productive session!");
        break;
      case hour >= 5 && hour < 7:
        setGreetingsText(
          "Early bird time! 🐦 Clear advantage over sleepyheads)"
        );
        break;
      case hour >= 7 && hour < 12:
        setGreetingsText("Good morning! ☕ Glad to see you!");
        break;
      default:
        break;
    }
  }, [registerTab]);

  return (
    <>
      <Dialog
        scroll="paper"
        open={clicked}
        onClose={() => {
          setClicked(false);
        }}
      >
        <DialogContent
          sx={{
            width: "450px",
            textAlign: "center",
          }}
        >
          <DialogTitle
            sx={{ fontFamily: "'Macondo', cursive", fontWeight: 1000 }}
          >
            {greetingsText}
          </DialogTitle>
          <DialogContentText>
            Please choose one of the options
          </DialogContentText>

          <DialogActions>
            <StyledButton
              variant="contained"
              sx={{ backgroundColor: "primary.light", color: "primary.main" }}
              onClick={() => {
                setRegisterTab(true);
              }}
            >
              Register
            </StyledButton>
            <StyledButton
              onClick={() => {
                setRegisterTab(false);
              }}
              variant="contained"
              sx={{ backgroundColor: "primary.light", color: "primary.main" }}
            >
              Log in
            </StyledButton>
          </DialogActions>
          {registerTab ? (
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

                <StyledButton
                  sx={{
                    backgroundColor: "primary.light",
                    color: "primary.main",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Submit
                </StyledButton>
              </FormControl>
            </form>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("submited");
              }}
            >
              <FormControl fullWidth>
                <Typography>Enter credentials</Typography>
                <TextField
                  // looks like textfields with same label shares values also. So I just
                  // use key property to fix that. I'm not sure controlled input with single
                  // state gonna fix that. We'll see later
                  key={3}
                  sx={{ marginTop: "10px" }}
                  required
                  variant="filled"
                  label="Usenrname"
                />
                <TextField
                  key={4}
                  sx={{ marginTop: "10px" }}
                  required
                  variant="filled"
                  label="Password"
                />
                <StyledButton
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: "primary.light",
                    color: "primary.main",
                  }}
                >
                  Submit
                </StyledButton>
              </FormControl>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegLog;

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import React, { useState } from "react";
import { useEffect } from "react";
import { greetingsMessage } from "../../../additionalStuff/helperFunctions";
import { RegisterFormButton } from "../../../additionalStuff/styledMuiComponents";
import Login from "./Login";
import Register from "./Register";

const RegLog = (props) => {
  const { clicked, setClicked } = props;
  const [registerTab, setRegisterTab] = useState(true);
  const [greetingsText, setGreetingsText] = useState("");

  useEffect(() => {
    setGreetingsText(greetingsMessage());
  }, [registerTab]);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

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
            width: `${sm ? "80vw" : "450px"}`,
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
            <RegisterFormButton
              variant="contained"
              onClick={() => {
                setRegisterTab(true);
              }}
            >
              Register
            </RegisterFormButton>
            <RegisterFormButton
              onClick={() => {
                setRegisterTab(false);
              }}
              variant="contained"
            >
              Log in
            </RegisterFormButton>
          </DialogActions>
          {registerTab ? <Register /> : <Login setClicked={setClicked} />}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegLog;

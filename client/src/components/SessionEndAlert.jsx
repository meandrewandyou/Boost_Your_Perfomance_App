import { NotificationsActive } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bellAnimation } from "../additionalStuff/animations";
import { setAlert } from "../redux/slices/sessionAlert";
const SessionEndAlert = () => {
  const open = useSelector((state) => state.sessionAlert.value);
  const dispatch = useDispatch();
  const closeAlert = () => {
    dispatch(setAlert(false));
  };
  return (
    <>
      <Dialog open={open} onClose={closeAlert}>
        <DialogTitle sx={{ margin: "auto" }}>
          <Icon fontSize="inherit" />
          <NotificationsActive
            sx={{ animation: `${bellAnimation} 300ms infinite` }}
            color="warning"
            fontSize="large"
          />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            The session is done! Stop working. Make a note where you've stopped.
            Make some notes for upcoming sessions if necessary. Take a brake
          </DialogContentText>
          <DialogActions>
            <Button onClick={closeAlert} variant="contained" color="info">
              Make a note
            </Button>
            <Button onClick={closeAlert} variant="contained" color="error">
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SessionEndAlert;

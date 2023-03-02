import { Check, Close, Edit } from "@mui/icons-material";
import {
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  Slide,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditableTextInput } from "../../additionalStuff/styledMuiComponents";
import { editText } from "../../redux/slices/userSlice";

const EditableText = ({ value, projectId, tab }) => {
  const loggedUser = useSelector((state) => state.loggedUserState);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(value);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });

  const handleSetText = (e) => {
    setEditedText(e.target.value);
  };

  const saveEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (value === editedText) {
        setError({ status: true, message: "You haven't edited a thing bro" });
        setLoading(false);
      } else {
        const projectIndex = loggedUser.projects.findIndex(
          (project) => project._id === projectId
        );
        const response = await axios.post(`/user/edit/${tab}`, {
          loggedUser: loggedUser.userName,
          projectId,
          editedText,
        });
        if (projectIndex && response && response.status === 200) {
          dispatch(editText({ projectIndex, tab, editedText }));
          setEditing(false);
          setLoading(false);
          setError({ ...error, status: false });
        }
      }
    } catch (err) {
      if (!err.response) {
        setError({
          status: true,
          message:
            "Server's not responding or something wrong with your internet connection!",
        });
      }
      setLoading(false);
      setError({ status: true, message: err.response.data });
    }
  };
  return (
    <>
      <Slide timeout={500} direction="left" in={true}>
        <Paper
          elevation={8}
          sx={{
            padding: "1rem",
            position: "relative",
            zIndex: 10,
            opacity: 0.8,
          }}
        >
          <form
            onSubmit={(e) => {
              saveEdit(e);
            }}
          >
            <EditableTextInput
              multiline
              onChange={(e) => {
                handleSetText(e);
              }}
              disabled={!editing}
              value={editing ? editedText : value}
              sx={{
                margin: "1rem 0",
              }}
              color="warning"
              fullWidth
              required
              error={error.status}
              helperText={editing && error.status && error.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Divider
                      orientation="vertical"
                      sx={{
                        height: "40px",
                        m: 0.5,
                        borderRightWidth: 4,
                      }}
                    />

                    {!editing ? (
                      <IconButton
                        sx={{
                          display: "inline",
                          marginLeft: "auto",
                          float: "right",
                        }}
                        onClick={() => setEditing(true)}
                      >
                        <Edit />
                      </IconButton>
                    ) : (
                      <Box>
                        <IconButton
                          onClick={() => {
                            setEditing(false);
                          }}
                          sx={{
                            "&:hover": {
                              color: "error.light",
                            },
                          }}
                        >
                          <Close />
                        </IconButton>
                        {loading ? (
                          <CircularProgress size={14} />
                        ) : (
                          <IconButton
                            sx={{
                              "&:hover": {
                                color: "success.dark",
                              },
                            }}
                            type="submit"
                            edge="end"
                          >
                            <Check />
                          </IconButton>
                        )}
                      </Box>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Paper>
      </Slide>
    </>
  );
};

export default EditableText;

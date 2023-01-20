import { AccountCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserLoginMenu = ({ clicked, setClicked }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const timerState = useSelector((state) => state.timerState.value);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const open = !!anchorEl;

  return (
    <>
      <IconButton disabled={timerState} onClick={handleOpenMenu}>
        <AccountCircle sx={{ fontSize: "50px" }} />
      </IconButton>
      <Menu
        PaperProps={{ sx: { backgroundColor: "primary.light" } }}
        transitionDuration={500}
        id="user-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem component={Link} to={"/user_info"}>
          Profile
        </MenuItem>

        <MenuItem component={Link} to={"/project_board"}>
          Projects
        </MenuItem>
        <MenuItem>Log out</MenuItem>
        <MenuItem
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          Login/register
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserLoginMenu;

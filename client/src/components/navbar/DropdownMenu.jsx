import { MoreVert } from "@mui/icons-material";
import { IconButton, ListItemText, Menu } from "@mui/material";
import React, { useState } from "react";
import RestoreUser from "./TestUserButton";
import ThemeSwitcher from "./ThemeSwitcher";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ textAlign: "center" }}
      >
        <ListItemText>
          <RestoreUser />
        </ListItemText>
        <ListItemText>
          <ThemeSwitcher />
        </ListItemText>
      </Menu>
    </>
  );
};

export default DropdownMenu;

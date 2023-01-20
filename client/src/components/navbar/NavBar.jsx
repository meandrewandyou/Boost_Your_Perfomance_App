import { AppBar, Toolbar, Box, useTheme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import RegLog from "./reglog/RegLog";
import RestoreUser from "./TestUserButton";
import NavBarTitle from "./NavBarTitle";
import UserLoginMenu from "./reglog/UserLoginMenu";
import DropdownMenu from "./DropdownMenu";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        sx={{
          position: "sticky",
          top: "5px",
          borderRadius: "40px",
        }}
      >
        <RegLog clicked={clicked} setClicked={setClicked} />
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <UserLoginMenu clicked={clicked} setClicked={setClicked} />
            <NavBarTitle />
          </Box>
          {sm ? (
            <DropdownMenu />
          ) : (
            <Box>
              <RestoreUser />
              <ThemeSwitcher />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;

import {
  AppBar,
  Fade,
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  AccountCircle,
  BeachAccessTwoTone,
  ForestTwoTone,
} from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../redux/slices/darkMode";
import { Box } from "@mui/system";
import RegLog from "./RegLog";
import RestoreUser from "./TestUserButton";
import { HeaderTypography } from "../additionalStuff/styledMuiComponents";

const StyledSpan = styled("span")({
  color: "black",
});

const NavBar = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const timerState = useSelector((state) => state.timerState.value);
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const open = !!anchorEl;

  return (
    <>
      <RegLog clicked={clicked} setClicked={setClicked} />
      <AppBar sx={{ position: "sticky", top: "0px" }}>
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <div>
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
                <MenuItem sx={{ "Mui-selected": { backgroundColor: "red" } }}>
                  Profile
                </MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Log out</MenuItem>
                <MenuItem
                  onClick={() => {
                    setClicked(!clicked);
                  }}
                >
                  Login/register
                </MenuItem>
              </Menu>
            </div>

            <Box
              onMouseOver={() => {
                setHover(true);
              }}
              onMouseOut={() => {
                setHover(false);
              }}
            >
              <Fade timeout={700} in={hover}>
                <HeaderTypography noWrap variant="h3">
                  <StyledSpan>B</StyledSpan>oost<StyledSpan> Y</StyledSpan>or
                  <StyledSpan> O</StyledSpan>wn
                  <StyledSpan> P</StyledSpan>erfomance
                </HeaderTypography>
              </Fade>
              <Fade timeout={700} in={!hover}>
                <HeaderTypography variant="h3">GOALS</HeaderTypography>
              </Fade>
            </Box>
          </Box>
          <RestoreUser />
          <FormControlLabel
            control={
              <Switch
                color="default"
                checked={darkMode}
                onChange={() => {
                  dispatch(changeMode());
                }}
              />
            }
            label={
              darkMode ? (
                <ForestTwoTone fontSize="large" color="secondary" />
              ) : (
                <BeachAccessTwoTone fontSize="large" color="secondary" />
              )
            }
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;

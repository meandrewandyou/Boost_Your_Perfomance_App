import { Box, Fade, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { HeaderTypography } from "../../additionalStuff/styledMuiComponents";

const NavBarTitle = () => {
  const [hover, setHover] = useState(false);

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      onMouseOver={() => {
        !md && setHover(true);
      }}
      onMouseOut={() => {
        !md && setHover(false);
      }}
    >
      {!md && (
        <Fade timeout={700} in={hover}>
          <HeaderTypography noWrap variant="h3">
            Boost Your Perfomance
          </HeaderTypography>
        </Fade>
      )}
      <Fade timeout={700} in={!hover}>
        <HeaderTypography variant="h3">GOALS</HeaderTypography>
      </Fade>
    </Box>
  );
};

export default NavBarTitle;

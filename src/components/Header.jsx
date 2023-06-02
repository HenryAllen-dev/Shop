import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { MenuRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import DrawerNav from "./DrawerNav";
import Navbar from "./Navbar";
import ThemeSwitch from "./common/ThemeSwitch";
const Header = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [isMdUp]);
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <Box p={1} bgcolor={theme.palette.primary.main}>
        <DrawerNav isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <Box display={{ xs: "block", md: "none" }}></Box>
        <Grid container>
          <Grid
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            xs={12}
            md={6}
          >
            <Typography mx={1} fontWeight="bolder" color="white" variant="h4">
              Henry Allen Shop
              <ThemeSwitch />
            </Typography>
            <Box display={{ xs: "block", md: "none" }}>
              <IconButton onClick={toggleDrawer} size="large">
                <MenuRounded fontSize="inherit" />
              </IconButton>
            </Box>
          </Grid>
          <Grid xs={12} md={6} my={1}>
            <Searchbar />
          </Grid>
        </Grid>
      </Box>
      <Box display={{ xs: "none", md: "block" }}>
        <Navbar />
      </Box>
    </>
  );
};

export default Header;

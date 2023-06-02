import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { navArray } from "../routes/routes";
import { Fragment } from "react";
const DrawerNav = ({ toggleDrawer, isDrawerOpen }) => {
  return (
    <Drawer
      onClose={toggleDrawer}
      variant="temporary"
      anchor="top"
      open={isDrawerOpen}
    >
      <Box
        sx={{ width: "auto", height: "100%" }}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          {navArray.map((nav) => (
            <Fragment key={nav.name}>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={nav.path}>
                  <ListItemIcon>{nav.icon}</ListItemIcon>
                  <ListItemText sx={{ display: "flex", alignItems: "center" }}>
                    {nav.name}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider variant="fullWidth"/>
            </Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerNav;

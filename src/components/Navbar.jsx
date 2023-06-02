import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { navArray } from "../routes/routes";

const Navbar = () => {
  return (
    <Box p={1} display="flex" justifyContent="space-around">
      {navArray.map((nav) => (
        <Link key={nav.name} to={nav.path}>
          <Button sx={{ display: "flex", alignItems: "center" }}>
            <Box display="flex" alignItems="center" mx={1}>
              {nav.icon}
            </Box>
            <Box>{nav.name}</Box>
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default Navbar;

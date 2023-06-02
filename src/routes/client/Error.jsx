import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Helmet>
        <title>404</title>
      </Helmet>
      <Box>
        <Typography textAlign="center" color="primary" variant="h1">
          404
        </Typography>
        <Typography textAlign="center" variant="h3">
          Page Not Found :(
        </Typography>
      </Box>
    </Box>
  );
};

export default Error;

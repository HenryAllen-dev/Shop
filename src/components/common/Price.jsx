import { useTheme } from "@emotion/react";
import { Badge, Box, Typography } from "@mui/material";
const Price = ({ product: item }) => {
  const { success } = useTheme().palette;
  return (
    <Box display="flex" alignItems="center">
      {item.off > 0 ? (
        <>
          <Typography
            sx={{ textDecoration: "line-through" }}
            color="error"
            gutterBottom
            variant="h6"
            component="div"
          >
            {item.price} $
          </Typography>
          <Badge
            sx={{ mx: 1, p: "2px" }}
            variant="standard"
            color="success"
            badgeContent={item.off + "%"}
          >
            <Typography
              color={success.main}
              gutterBottom
              variant="h5"
              component="div"
            >
              {(((100 - item.off) * item.price) / 100).toFixed(2)}$
            </Typography>
          </Badge>
        </>
      ) : (
        <Typography
          color={success.main}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.price} $
        </Typography>
      )}
    </Box>
  );
};

export default Price;

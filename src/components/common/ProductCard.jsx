import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import NotFoundImage from "../../assets/image-not-found.jpg";
import { Link } from "react-router-dom";
import Price from "./Price";
import _ from "lodash";
import { OpenInNew } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
const ProductCard = ({ item, onSlider = false }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {isMdUp || !onSlider ? (
        <Box m={2}>
          <Card sx={{ width: 250, m: 1 }}>
            <CardMedia
              loading="lazy"
              component="img"
              height="200"
              width="250"
              image={item.picture}
              alt="Product Picture"
              onError={(e) => {
                e.target.src = NotFoundImage;
              }}
            />
            <CardContent>
              <Typography fontWeight="bold" gutterBottom variant="body1" component="div">
                {_.truncate(item.title, { length: 20 })}
              </Typography>
              <Typography fontWeight={100} gutterBottom variant="body1" component="div">
                {_.truncate(item.description, { length: 20 })}
              </Typography>
              <Rating readOnly defaultValue={item.rate / 20} />
            </CardContent>

            <CardActions sx={{ position: "relative" }}>
              <Price product={item} />
              <Box position="absolute" right="0">
                <IconButton
                  color="primary"
                  component={Link}
                  to={`/products/${item.id}`}
                >
                  <OpenInNew />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ) : (
        <Box m={1}>
          <Card sx={{ width: "150px" }}>
            <CardActionArea component={Link} to={`/products/${item.id}`}>
              <img
                width="150px"
                height="150px"
                src={item.picture}
                alt="product"
                onError={(e) => {
                  e.target.src = NotFoundImage;
                }}
              />
              <CardContent>
                <Typography fontWeight="bold" gutterBottom variant="caption" component="div">
                  {_.truncate(item.title, { length: 15 })}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      )}
    </>
  );
};

export default ProductCard;

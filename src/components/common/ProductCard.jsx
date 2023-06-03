import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import NotFoundImage from "../../assets/image-not-found.jpg";
import { useNavigate } from "react-router-dom";
import Price from "./Price";
import _ from "lodash";
import { useTheme } from "@emotion/react";
const ProductCard = ({ item, onSlider = false, isDragging = false }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  return (
    <>
      {isMdUp || !onSlider ? (
        <Box m={2}>
          <Card sx={{ width: 250, m: 1 }}>
            <CardActionArea
              onClick={() => {
                isDragging ? navigate() : navigate(`/products/${item.id}`);
              }}
            >
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
                <Typography
                  fontWeight="bold"
                  gutterBottom
                  variant="body1"
                  component="div"
                >
                  {_.truncate(item.title, { length: 20 })}
                </Typography>
                <Typography
                  fontWeight={100}
                  gutterBottom
                  variant="body1"
                  component="div"
                >
                  {_.truncate(item.description, { length: 20 })}
                </Typography>
                <Rating readOnly defaultValue={item.rate / 20} />
                <Price product={item} />
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ) : (
        <Box m={1}>
          <Card sx={{ width: "150px" }}>
            <CardActionArea
              onClick={() => {
                isDragging ? navigate() : navigate(`/products/${item.id}`);
              }}
            >
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
                <Typography
                  fontWeight="bold"
                  gutterBottom
                  variant="caption"
                  component="div"
                >
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

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import NotFoundImage from "../../assets/image-not-found.jpg";
import { Link } from "react-router-dom";
import Price from "./Price";
import _ from "lodash";

const ProductCard = ({ item }) => {
  return (
    <Card key={item.id} sx={{ width: 250 }}>
      <CardActionArea>
        <Link
          style={{ textDecoration: "none", color: "unset" }}
          to={`/products/${item.id}`}
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
            <Typography gutterBottom variant="body1" component="div">
              {_.truncate(item.title, { length: 20 })}
            </Typography>
            <Rating readOnly defaultValue={item.rate / 20} />
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Price product={item} />
      </CardActions>
    </Card>
  );
};

export default ProductCard;

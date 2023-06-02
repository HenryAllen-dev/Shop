import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
const Categories = () => {
  const [, setSearchParams] = useSearchParams();
  const categories = useSelector((state) => state.category);
  return (
    <Box p={2}>
      <Helmet>
        <title>Categories</title>
      </Helmet>
      <Typography variant="h4">Categories</Typography>
      <Box flexWrap="wrap" display="flex" justifyContent="center">
        {categories.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 345, m: 2 }}>
            <CardActionArea
              onClick={() => {
                setSearchParams({ category: item.id });
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "unset" }}
                to={`/products`}
              >
                <CardMedia
                  component="img"
                  height="300"
                  width="300"
                  image={item.image}
                  alt="Product"
                  onError={(e) => {
                    e.target.src = "/images/image-not-found.jpg";
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.name}
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;

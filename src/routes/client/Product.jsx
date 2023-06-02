import { Box, Button, Rating, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectById } from "../../reducers/productSlice";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Price from "../../components/common/Price";
import { ShoppingCartOutlined, Window } from "@mui/icons-material";
import { addToCart } from "../../reducers/cartSlice";
import { categoryIdtoName } from "../../categoryIdtoName";
import { Helmet } from "react-helmet-async";
import NotFoundImage from "../../assets/image-not-found.jpg";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => selectById(state, id));
  return (
    <>
      <Helmet>
        <title>Product</title>
      </Helmet>
      <Box height="100%" p={2}>
        <Grid mt={2} container>
          <Grid p={3} xs={12} md={4}>
            <img
              onError={(e) => {
                e.target.src =  NotFoundImage ;
              }}
              width="100%"
              src={product.picture}
              alt="product"
            />
          </Grid>
          <Grid xs={12} md={8}>
            <Typography fontWeight="bolder" variant="h2">
              {product.title}
            </Typography>
            <Typography m={2} variant="h4">
              {product.description}
            </Typography>
            <Box mt={2}>
              <Typography display="flex" alignItems="center" variant="h5">
                <Typography color="primary">
                  <Window sx={{ verticalAlign: "middle" }} />
                  &nbsp;
                </Typography>
                {categoryIdtoName(product.category)}
              </Typography>
            </Box>
            <Box mt={2} alignItems="center" display="flex">
              <Price product={product} />
            </Box>
            <Box display="flex" alignItems="center">
              <Rating
                size="large"
                name="Popularity"
                defaultValue={product.rate / 20}
                readOnly
              />
            </Box>
            <Button
              sx={{ my: 2, p: 2, width: { xs: "100%", md: "unset" } }}
              variant="contained"
              size="large"
              color="primary"
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              <ShoppingCartOutlined />
              Add to cart
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Product;

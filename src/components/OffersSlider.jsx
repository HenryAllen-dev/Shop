import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { selectAll } from "../reducers/productSlice";
import ProductCard from "./common/ProductCard";
const OffersSlider = () => {
  const products = useSelector(selectAll);
  const offProducts = products.sort((a, b) => b.off - a.off).slice(0, 10);
  return (
    <Box p={3}>
      <Typography fontWeight="bolder" m={2} variant="h5">
        Offers %
      </Typography>
      <Slider variableWidth arrows={false} infinite={false} slidesToShow={1} swipeToSlide>
        {offProducts.map((item) => (
          <ProductCard onSlider={true} item={item} key={item.title} />
        ))}
      </Slider>
    </Box>
  );
};

export default OffersSlider;

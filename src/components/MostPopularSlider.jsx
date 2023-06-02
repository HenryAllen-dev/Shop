import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { selectAll } from "../reducers/productSlice";
import { useSelector } from "react-redux";
import ProductCard from "./common/ProductCard";
const MostPopularSlider = () => {
  const products = useSelector(selectAll);
  const popularProducts = products.sort((a, b) => b.rate - a.rate).slice(0, 10);
  return (
    <Box p={3}>
      <Typography fontWeight="bolder" m={2} variant="h5">
        Most Popular
      </Typography>
      <Slider
        arrows={false}
        slidesToShow={1}
        variableWidth
        autoplay
        autoplaySpeed={2000}
        speed={2000}
        swipeToSlide
      >
        {popularProducts.map((item) => (
          <Box key={item.title} m={2}>
            <ProductCard item={item} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default MostPopularSlider;

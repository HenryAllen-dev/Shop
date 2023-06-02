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
      <Slider
        variableWidth
        autoplay
        autoplaySpeed={2000}
        speed={2000}
        arrows={false}
        slidesToShow={1}
        swipeToSlide
      >
        {offProducts.map((item) => (
          <Box key={item.title} m={2}>
            <ProductCard item={item} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default OffersSlider;

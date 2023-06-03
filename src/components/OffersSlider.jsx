import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { selectAll } from "../reducers/productSlice";
import ProductCard from "./common/ProductCard";
import { useState } from "react";
const OffersSlider = () => {
  const [isDragging, setIsDragging] = useState();

  const handleSwipe = () => {
    setIsDragging(true);
    setTimeout(() => {
      setIsDragging(false);
    }, 500);
  };
  const products = useSelector(selectAll);
  const offProducts = products.sort((a, b) => b.off - a.off).slice(0, 10);
  return (
    <Box p={3}>
      <Typography fontWeight="bolder" m={2} variant="h5">
        Offers %
      </Typography>
      <Slider
        onSwipe={handleSwipe}
        infinite={false}
        arrows={false}
        slidesToShow={1}
        variableWidth
        swipeToSlide
      >
        {offProducts.map((item) => (
          <ProductCard
            isDragging={isDragging}
            onSlider={true}
            item={item}
            key={item.title}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default OffersSlider;

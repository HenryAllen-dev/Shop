import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { selectAll } from "../reducers/productSlice";
import { useSelector } from "react-redux";
import ProductCard from "./common/ProductCard";
import { useState } from "react";
const MostPopularSlider = () => {
  const [isDragging, setIsDragging] = useState();

  const handleSwipe = () => {
    setIsDragging(true);
    setTimeout(() => {
      setIsDragging(false);
    }, 500);
  };

  const products = useSelector(selectAll);
  const popularProducts = products.sort((a, b) => b.rate - a.rate).slice(0, 10);
  return (
    <Box p={3}>
      <Typography fontWeight="bolder" m={2} variant="h5">
        Most Popular
      </Typography>
      <Slider
        onSwipe={handleSwipe}
        infinite={false}
        arrows={false}
        slidesToShow={1}
        variableWidth
        swipeToSlide
      >
        {popularProducts.map((item) => (
          <ProductCard
            onSlider={true}
            isDragging={isDragging}
            item={item}
            key={item.title}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default MostPopularSlider;

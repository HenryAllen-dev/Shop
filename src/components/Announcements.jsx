import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
const Announcements = () => {
  const options = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed:1000,
    pauseOnHover: false,
    cssEase: "linear",
  };
  return (
    <Box px={{ xs: 0, lg: 5 }}>
      <Slider  {...options}>
        {[
          "/images/slider/Slide1.png",
          "/images/slider/Slide2.png",
          "/images/slider/Slide3.png",
        ].map((item, index) => (
          <img key={index} src={item} alt="Slider" />
        ))}
      </Slider>
    </Box>
  );
};

export default Announcements;

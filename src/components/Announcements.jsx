import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import Slide1 from "../assets/slider/Slide1.png"
import Slide2 from "../assets/slider/Slide2.png"
import Slide3 from "../assets/slider/Slide3.png"
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
          Slide1,Slide2,Slide3
        ].map((item, index) => (
          <img key={index} src={item} alt="Slider" />
        ))}
      </Slider>
    </Box>
  );
};

export default Announcements;

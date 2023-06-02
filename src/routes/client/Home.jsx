import { Helmet } from "react-helmet-async";
import Announcements from "../../components/Announcements";
import MostPopularSlider from "../../components/MostPopularSlider";
import OffersSlider from "../../components/OffersSlider";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Henry Shop</title>
      </Helmet>
      <Announcements />
      <MostPopularSlider />
      <OffersSlider />
    </>
  );
};

export default Home;

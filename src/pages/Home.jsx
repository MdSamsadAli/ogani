import BannerSlider from "../components/BannerSlider";
import BlogWrap from "../components/BlogWrap";
import Blogs from "../components/Blog";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <>
      <BannerSlider />
      <Trending />
      <BlogWrap />
      <Blogs />
    </>
  );
};

export default Home;

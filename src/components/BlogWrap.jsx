import LatestProducts from "./LatestProducts";
import TopRatedProducts from "./TopRatedProducts";
import ReviewProducts from "./ReviewProducts";

const BlogWrap = () => {
  return (
    <>
      <div className="w-10/12 m-auto mt-16 blog_wrapper">
        <div className="lg:w-full">
          <div className="lg:flex gap-4">
            <LatestProducts />
            <TopRatedProducts />
            <ReviewProducts />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogWrap;

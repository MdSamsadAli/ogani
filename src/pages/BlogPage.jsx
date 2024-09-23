import Banner from "../common/Banner";
import Blogs from "../components/Blog";

const BlogPage = () => {
  return (
    <>
      <Banner title={"BlogPage"} />

      <div>
        <Blogs />
      </div>
    </>
  );
};

export default BlogPage;

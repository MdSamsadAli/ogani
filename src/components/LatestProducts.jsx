import Slider from "react-slick";
import { trendData } from "../assets/data";
import Title from "../common/Title";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useLocation } from "react-router-dom";

const LatestProducts = () => {
  var settings = {
    adaptiveHeight: true,
    dots: false,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    arrows: true,
    rows: 3,
    nextArrow: <MdNavigateNext />,
    prevArrow: <MdNavigateBefore />,
  };

  const location = useLocation();
  return (
    <>
      <div className={`${location.pathname !== "/" ? "" : "lg:w-1/3"}`}>
        <div className="no-line">
          <Title title={"Latest Products"} />
        </div>
        <div className="mt-8">
          <Slider {...settings}>
            {trendData.map((val, key) => (
              <div key={key} className="flex gap-4 items-center mb-4">
                <div className="overflow-hidden w-32 h-20">
                  <img
                    src={val.img}
                    alt="banner"
                    className="object-cover w-full h-full hover:scale-110 transition-all ease-in-out duration-300"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{val.title}</h3>
                  <strong>$30.00</strong>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LatestProducts;

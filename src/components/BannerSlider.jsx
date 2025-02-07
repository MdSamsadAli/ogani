import Slider from "react-slick";
import { Cat } from "../../public/assets/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const BannerSlider = () => {
  var settings = {
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <MdNavigateNext />,
    prevArrow: <MdNavigateBefore />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-10/12 m-auto">
        <Slider {...settings}>
          {Cat.map((banner, key) => (
            <div key={key} className={`relative py-4`}>
              <div className="overflow-hidden">
                <img src={banner.img} alt="banner" className="w-full h-full" />
              </div>

              <div className="absolute bottom-8 px-4 py-3 left-1/2 -translate-x-1/2 bg-white">
                <p className="text-xl font-bold whitespace-nowrap">
                  {banner.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;

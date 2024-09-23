import { FaRegComments } from "react-icons/fa";
import {
  MdNavigateBefore,
  MdNavigateNext,
  MdOutlineWatchLater,
} from "react-icons/md";
import { trendData } from "../assets/data";
import Slider from "react-slick";

const MostRead = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <MdNavigateNext />,
    prevArrow: <MdNavigateBefore />,
  };
  return (
    <>
      <div className="mt-8">
        <Slider {...settings}>
          {trendData.slice(0, 3).map((val, key) => (
            <div key={key}>
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={val.img}
                    alt="banner"
                    className="w-full h-full hover:scale-110 transition-all ease-in-out duration-300"
                  />
                </div>

                <div className="absolute bottom-0 text-white">
                  <button className="p-2 bg-black">{val.icon}</button>
                </div>
              </div>

              <h3 className="text-xl font-semibold">{val.title}</h3>
              <div className="flex gap-4 text-gray-300">
                <p className="flex items-center gap-4 mt-2 ">
                  <MdOutlineWatchLater /> {val.date}
                </p>
                <p className="flex items-center gap-4 mt-2">
                  <FaRegComments /> {val.comment}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="grid md:grid-cols-1 gap-6">
          {trendData.slice(1, 3).map((val, key) => (
            <div key={key} className="flex gap-4 items-center">
              <div className="overflow-hidden w-32 h-20">
                <img
                  src={val.img}
                  alt="banner"
                  className="object-cover w-full h-full hover:scale-110 transition-all ease-in-out duration-300"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold">{val.title}</h3>
                <div className="flex gap-4 text-gray-300">
                  <p className="flex items-center gap-4 mt-2 ">
                    <MdOutlineWatchLater /> {val.date}
                  </p>
                  <p className="flex items-center gap-4 mt-2">
                    <FaRegComments /> {val.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MostRead;

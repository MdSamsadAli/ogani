import Title from "../common/Title";
import { blogs } from "../../public/assets/data";
import { FaRegComment } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";

const Blogs = () => {
  return (
    <>
      <div className="w-10/12 m-auto mt-16">
        <div className="mx-2 my-16 text-center">
          <Title title="From The Blog" />
        </div>

        <div className="lg:flex">
          {blogs.map((banner, key) => (
            <div key={key} className="relative mb-5">
              <div className="mx-2">
                <div className="overflow-hidden md:h-72">
                  <img
                    src={banner.img}
                    alt="banner"
                    className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-300"
                  />
                </div>

                <div className="">
                  <div className="flex gap-4 my-4 mb-1">
                    <p className="flex items-center gap-1 text-gray-500">
                      <IoIosCalendar /> {banner.date}
                    </p>
                    <p className="flex items-center gap-1 text-gray-500">
                      <FaRegComment /> {banner.comment}
                    </p>
                  </div>
                  <h3 className="md:text-xl font-semibold my-2">
                    {banner.title}
                  </h3>
                  <p className="text-gray-500">{banner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;

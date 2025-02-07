import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { Cat } from "../assets/data";

const Header = () => {
  const location = useLocation();

  const [dropDownMenuOpen, setDropDownMenuOpen] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setDropDownMenuOpen(true);
    } else {
      setDropDownMenuOpen(false);
    }
  }, [window.location.pathname]);

  const toggleDropDown = () => {
    setDropDownMenuOpen(!dropDownMenuOpen);
  };

  return (
    <>
      <div className="w-10/12 m-auto">
        <div className="lg:flex items-start gap-4">
          <div className="lg:w-1/4 z-10 border">
            <div
              className="flex items-center justify-evenly text-white bg-btn-color p-3"
              onClick={() => toggleDropDown()}
            >
              <GiHamburgerMenu />
              <div>
                <Link className="font-extrabold text-xl whitespace-nowrap">
                  All Categories
                </Link>
              </div>
              <button>
                {dropDownMenuOpen ? <IoChevronDown /> : <IoChevronUp />}
              </button>
            </div>

            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                dropDownMenuOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul>
                {Cat.map((val, i) => (
                  <li
                    key={i}
                    className="px-5 py-3 bg-white shadow-md hover:text-green-500"
                  >
                    <Link to={val.path} className="whitespace-nowrap">
                      {val.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:h-3/4 w-full mt-4 lg:mt-0">
            <div className="lg:flex items-center mb-3">
              <div className="flex items-center gap-3 font-semibold border p-3 lg:w-1/4 whitespace-nowrap">
                All Categories <IoChevronDown />
              </div>
              <div className="lg:w-3/4">
                <input
                  type="text"
                  className="border w-full p-3 focus:outline-none"
                  placeholder="What do you need ?"
                />
              </div>
              <div className="text-right">
                <button className="bg-btn-color border text-white font-extrabold p-3">
                  Search
                </button>
              </div>
            </div>
            {location.pathname === "/" && (
              <div className="relative">
                <div className="lg:w-1/3 lg:absolute top-1/2 left-10 lg:-translate-y-1/2">
                  <h4 className="font-bold text-xl">FRUIT FRESH</h4>
                  <h1 className="font-bold text-4xl py-3">
                    Vegetable 100% Organic
                  </h1>
                  <p>Free Pickup and Delivery Available</p>
                  <button className="bg-btn-color border text-white font-extrabold px-4 py-2 mt-3">
                    Shop Now
                  </button>
                </div>
                <div>
                  <img
                    src="/assets/images/banner.jpg.webp"
                    alt="banner-img"
                    className="w-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

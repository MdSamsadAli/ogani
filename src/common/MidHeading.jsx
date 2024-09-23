import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/images/logo.png.webp";
import { FaHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { navbar } from "../assets/data";
import { GiShoppingBag } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useState } from "react";

const MidHeading = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const openNavbar = () => {
    setIsOpenNav(!isOpenNav);
  };

  const { totalItems } = useSelector((state) => state.cart);
  return (
    <>
      <div className="sticky top-0 z-20 bg-white w-full">
        <div className="m-auto w-10/12 py-3">
          <div className="flex items-center justify-between">
            <div className="lg:hidden" onClick={openNavbar}>
              <RxHamburgerMenu />
            </div>
            <div>
              <img src={logo} alt="logo" />
            </div>

            <div
              className={`fixed top-0 left-0 h-full bg-white w-64 z-30 transform ${
                isOpenNav ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:flex lg:items-center`}
            >
              <div className="p-5 lg:hidden" onClick={openNavbar}>
                <RxHamburgerMenu />
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-6 capitalize">
                {navbar.slice(0, 5).map((val, key) => (
                  <div
                    className="group relative px-6 font-bold uppercase"
                    key={key}
                  >
                    {val.page ? (
                      <>
                        <div className="flex items-center gap-2">
                          <Link to={val.path}>{val.nav}</Link>
                          <button>
                            <IoChevronDown />
                          </button>
                        </div>

                        <div className="absolute top-full w-max opacity-0 group-hover:opacity-100 group-hover:max-h-full transition-opacity transition-max-height duration-300 ease-in-out max-h-0">
                          <ul>
                            {val.page.map((subPage, subKey) => (
                              <li
                                key={subKey}
                                className="px-5 py-3 bg-btn-color text-white shadow-md text-sm"
                              >
                                <Link to={subPage.path}>{subPage.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link className="text-hover-color text-sm" to={val.path}>
                        {val.nav}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaSearch className="text-gray-500 hover:text-green-500" />
              <div className="relative">
                <FaHeart className="text-xl" />
                <span className="absolute -top-2 left-3 h-4 w-5 bg-btn-color text-white grid place-items-center rounded-full text-xs">
                  0
                </span>
              </div>
              <div className="relative">
                <Link to={"/cart"}>
                  <GiShoppingBag className="text-xl" />
                  <span className="absolute -top-2 left-3 h-4 w-4 bg-btn-color text-white grid place-items-center rounded-full text-xs">
                    {totalItems}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidHeading;

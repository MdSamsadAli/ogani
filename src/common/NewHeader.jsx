import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch, FaTimes } from "react-icons/fa";
import { navbar } from "../assets/data";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [dropDownMenuOpen, setDropDownMenuOpen] = useState(false);

  const navbaropen = () => {
    setToggleNav(!toggleNav);
  };

  const toggleDropDown = (index) => {
    setDropDownMenuOpen(dropDownMenuOpen === index ? null : index);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`header sticky top-0 z-10 bg-black   ${
          isScrolled ? "shadow-lg bg-black" : ""
        }`}
      >
        <div className="w-10/12 m-auto">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex capitalize">
              {navbar.slice(0, 5).map((val, key) => (
                <div
                  className="group relative border-r border-slate-600 first:bg-red-500 first:border-l py-3 px-4 hover:bg-slate-600"
                  key={key}
                >
                  {val.page ? (
                    <>
                      <div className="text-white flex items-center gap-2 hover:text-orange-500">
                        <div className="text-white">
                          <Link to={val.path}>{val.nav}</Link>
                        </div>
                        <button>
                          <IoChevronDown />
                        </button>
                      </div>

                      <div className="absolute left-0 top-full w-max opacity-0 group-hover:opacity-100 group-hover:max-h-full transition-opacity transition-max-height duration-300 ease-in-out max-h-0">
                        <ul className="">
                          {val.page.map((val, key) => (
                            <li
                              key={key}
                              className="px-5 py-3 text-white bg-black shadow-md hover:text-orange-500 "
                            >
                              <Link to={val.path} className="">
                                {val.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      className="hover:text-orange-500 text-white"
                      to={val.path}
                    >
                      {val.nav}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4 text-white">
              <FaSearch className="hover:text-orange-500 hover:scale-150" />
            </div>

            <div
              className="text-4xl hamburger md:hidden block text-white"
              onClick={navbaropen}
            >
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className={`md:w-1/5 w-full fixed top-0 right-0 z-10 h-full transform ${
            toggleNav ? "-translate-y-0" : "-translate-y-full"
          } transition-transform duration-500 ease-in-out shadow-lg bg-white w-fullscreen768`}
        >
          <div className="bg-white">
            <div className="absolute right-0 p-4" onClick={navbaropen}>
              <FaTimes />
            </div>
            <div className="mt-2 p-4">
              {navbar.map((val, key) => (
                <div className="" key={key}>
                  {val.page ? (
                    <>
                      <div
                        className="flex items-center gap-2 hover:text-green-500"
                        onClick={() => toggleDropDown(key)}
                      >
                        <div>
                          <Link to={val.path}>{val.nav}</Link>
                        </div>
                        <button>
                          {dropDownMenuOpen ? (
                            <IoChevronUp />
                          ) : (
                            <IoChevronDown />
                          )}
                        </button>
                      </div>

                      <div
                        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                          dropDownMenuOpen === key ? "max-h-40" : "max-h-0"
                        }`}
                      >
                        <ul>
                          {val.page.map((val, key) => (
                            <li
                              key={key}
                              className="px-5 py-3 bg-white shadow-md hover:text-green-500"
                            >
                              <Link to={val.path}>{val.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link className="hover:text-orange-500" to={val.path}>
                      {val.nav}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

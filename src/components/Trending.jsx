import { Link, useLocation } from "react-router-dom";
import Title from "../common/Title";
import { useEffect, useState } from "react";
import { trendData } from "../assets/data";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../store/cartSlice";
import PropTypes from "prop-types";

const Trending = ({ maxPrice }) => {
  const dispatch = useDispatch();
  const [qty] = useState(1);

  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: 1,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
  };

  const [trendItem, setTrendItem] = useState(trendData);
  const [activeItem, setActiveItem] = useState("all");

  const filterItems = (item) => {
    setActiveItem(item);

    let filteredItems = trendData;
    if (item !== "all") {
      filteredItems = filteredItems.filter((data) => data.category === item);
    }

    if (maxPrice) {
      filteredItems = filteredItems.filter((data) => data.price <= maxPrice);
    }

    setTrendItem(filteredItems);
  };

  useEffect(() => {
    filterItems(activeItem);
  }, [maxPrice]);

  const location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname === "/" ? "w-10/12 m-auto mt-12" : ""}`}
      >
        {location.pathname === "/" && (
          <div className="flex justify-center flex-col items-center">
            <Title title={"Featured Product"} />
            <ul className="flex max-overflow-hidden w-full">
              <li
                className={`px-4 py-3 ${activeItem === "all" ? "active" : ""}`}
                onClick={() => filterItems("all")}
              >
                <Link>All</Link>
              </li>
              <li
                className={`px-4 py-3 ${
                  activeItem === "oranges" ? "active" : ""
                }`}
                onClick={() => filterItems("oranges")}
              >
                <Link>Oranges</Link>
              </li>
              <li
                className={`whitespace-nowrap px-4 py-3 ${
                  activeItem === "freshmeates" ? "active" : ""
                }`}
                onClick={() => filterItems("freshmeates")}
              >
                <Link>Fresh Meat</Link>
              </li>
              <li
                className={`px-4 py-3 ${
                  activeItem === "vegetables" ? "active" : ""
                }`}
                onClick={() => filterItems("vegetables")}
              >
                <Link>Vegetables</Link>
              </li>
              <li
                className={`px-4 py-3 ${
                  activeItem === "fastfood" ? "active" : ""
                }`}
                onClick={() => filterItems("fastfood")}
              >
                <Link>Fastfood</Link>
              </li>
            </ul>
          </div>
        )}

        <div
          className={`grid ${
            location.pathname === "/"
              ? "md:grid-cols-4  mt-8"
              : "md:grid-cols-3"
          }  gap-4`}
        >
          {trendItem.map((val, key) => (
            <div key={key}>
              <div className="relative group">
                <div className="overflow-hidden">
                  <img
                    src={val.img}
                    alt="banner"
                    className="w-full h-full hover:scale-110 transition-all ease-in-out duration-300"
                  />
                </div>

                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-green-800 rounded-full mr-1">
                    <FaHeart />
                  </button>
                  <button className="p-2 bg-green-800 rounded-full mr-1">
                    <IoGitCompareSharp />
                  </button>
                  <button
                    className="p-2 bg-green-800 rounded-full"
                    onClick={() => handleAddToCart(val)}
                  >
                    <FaShoppingCart />
                  </button>
                </div>
              </div>

              <div className="text-center mt-2">
                <h3 className="text-xl font-semibold">{val.title}</h3>
                <strong>${val.price}</strong>
              </div>
            </div>
          ))}
        </div>

        {location.pathname === "/" && (
          <div className="flex justify-between gap-8">
            <div>
              <img
                src="../src/assets/images/banner-1.webp"
                alt=""
                className="w-full"
              />
            </div>
            <div>
              <img
                src="../src/assets/images/banner-2.webp"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

Trending.propType = {
  maxPrice: PropTypes.number.isRequired,
};
export default Trending;

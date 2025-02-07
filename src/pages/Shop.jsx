import Banner from "../common/Banner";
import { Cat } from "../assets/data";
import { Link } from "react-router-dom";
import Trending from "../components/Trending";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import LatestProducts from "../components/LatestProducts";

const Shop = () => {
  const [value, setValue] = useState(10);
  const onChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Banner title={"Shop"} />

      <div className="w-10/12 m-auto mt-12">
        <div className="block md:flex lg:flex">
          <div className="w-full md:w-1/4 lg:w-1/4">
            <div className="sidebar">
              <div className="sidebar__item">
                <h4 className="text-2xl font-bold mb-4">Department</h4>
                {Cat.map((item) => (
                  <li key={item} className="list-none mb-4">
                    <Link className="text-black">{item.title}</Link>
                  </li>
                ))}
              </div>

              <div className="sidebar__item w-4/5">
                <h4 className="text-2xl font-bold mb-4">Price</h4>
                <Slider min={0} max={100} value={value} onChange={onChange} />

                <strong>
                  ${0} - ${value}
                </strong>
              </div>

              <div className="sidebar__item w-4/5 mt-4">
                <LatestProducts />
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 lg:w-3/4">
            <Trending maxPrice={value} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

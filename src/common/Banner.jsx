import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Banner = ({ title }) => {
  return (
    <>
      <section className="bg-cover bg-center">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white">Organi Shop</h2>
              <div className="mt-4 text-lg text-white">
                <Link to={"/"} className="text-white hover:text-green-800">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Banner;

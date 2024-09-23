import { PropTypes } from "prop-types";
import { useLocation } from "react-router-dom";
const Title = ({ title }) => {
  const location = useLocation();
  return (
    <>
      <button
        className={`text-black ${
          location === "/" ? "px-4 py-3" : ""
        } font-bold text-3xl title relative whitespace-nowrap`}
      >
        {title}
      </button>
    </>
  );
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;

import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Icon = () => {
  return (
    <>
      <div className="social-icon">
        <FaFacebookF />
      </div>
      <div className="social-icon">
        <FaTwitter />
      </div>
      <div className="social-icon">
        <FaLinkedinIn />
      </div>
      <div className="social-icon">
        <FaPinterestP />
      </div>
    </>
  );
};

export default Icon;

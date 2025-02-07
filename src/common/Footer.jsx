import { GrLinkNext } from "react-icons/gr";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navbar } from "../../public/assets/data";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-950 footer mt-16">
        <div className="m-auto w-10/12 py-16">
          <div className="lg:flex gap-8">
            <div className="md:w-1/4">
              <h3 className="text-white mb-8 text-xl font-bold">About Us</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                odit labore animi laborum voluptas? Odit tempore nulla
                voluptates. Ad magnam vitae, numquam temporibus ducimus neque
                praesentium blanditiis exercitationem? Non, beatae?
              </p>
            </div>

            <div className="md:w-1/4">
              <h3 className="text-white mb-8 text-xl font-bold">Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter email..."
                  className="w-full p-2 focus:outline-none"
                />
                <div className="absolute right-0 top-0 h-full grid place-items-center px-3 bg-orange-500">
                  <GrLinkNext />
                </div>
              </div>
            </div>

            <div className="md:w-1/4">
              <h3 className="text-white mb-8 text-xl font-bold">
                Useful Links
              </h3>
              {navbar.map((val, key) => (
                <div key={key} className="text-gray-600">
                  <Link className="text-hover-color text-sm" to={val.path}>
                    {val.nav}
                  </Link>
                </div>
              ))}
            </div>

            <div className="md:w-1/4">
              <h3 className="text-white mb-8 text-xl font-bold">Follow Us</h3>
              <p className="text-gray-600">Lets Be Social</p>
              <div className="flex mt-4 gap-4">
                <div className="text-gray-400 hover:rotate-180 transition-all duration-300 ease-in-out">
                  <FaFacebook />
                </div>
                <div className="text-gray-400 hover:rotate-180 transition-all duration-300 ease-in-out">
                  <FaInstagram />
                </div>
                <div className="text-gray-400 hover:rotate-180 transition-all duration-300 ease-in-out">
                  <FaLinkedin />
                </div>
                <div className="text-gray-400 hover:rotate-180 transition-all duration-300 ease-in-out">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

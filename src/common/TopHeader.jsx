import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";

const TopHeader = () => {
  return (
    <>
      <div className="hidden lg:block border-b md:overflow-auto overflow-hidden overflow-x-auto bg-gray-100 py-2">
        <div className="w-10/12 m-auto">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div>
                <span className="text-sm flex items-center gap-1">
                  <FaEnvelope /> hello@hello.com
                </span>
              </div>
              <div className="text-sm border-l pl-4">
                Free Shipping For all Order of $99.
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-4 top-social-icons text-sm">
                <Icon />
              </div>
              <Link className="flex items-center border-l px-4 hover:text-rose-600 text-sm">
                <LiaFlagUsaSolid className="text-red-600 text-3xl" /> English
              </Link>

              <Link className="flex items-center border-x px-4 hover:text-rose-600 text-sm gap-2">
                <FaUser /> Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;

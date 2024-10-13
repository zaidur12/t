import logo1 from "../../assets/Images/logo1.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="min-w-full bg-black h-15 opacity-85 flex justify-between">
      <Link to="/" > <img className="w-20" src={logo1} /> </Link>
        <div className="flex justify-between">
          <ul className="flex mt-4 mr-96 text-white gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-white" : "text-green-500"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                }
              >
                {" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3  duration-200 ${
                    isActive ? "text-white" : "text-green-500"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                }
              >
                {" "}
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-white" : "text-green-500"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                }
              >
                {" "}
                Service
              </NavLink>
            </li>
          </ul>
          <div>
            <button className="bg-purple-500 m-4 px-4 rounded-2xl font-medium text-white h-7">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

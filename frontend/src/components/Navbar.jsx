import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser ] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
    setUser (false);
    setDropdownOpen(false);
  };

  const handleOptionClick = (path) => {
    navigate(path);
    setDropdownOpen(false); // Close dropdown after option is clicked
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-between text-sm py-1 mb-5 border-b border-gray-400">
        <div className="cursor-pointer size-[10%] mr-36 flex items-center">
          <img src={assets.logo} alt="" />
          <span className="text-2xl font-bold">
            <h1>PulseCare</h1>
          </span>
        </div>

        <ul className="hidden md:flex gap-5 items-start font-medium">
          <NavLink to="/">
            <li className="py-1">HOME</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/doctors">
            <li className="py-1">ALL DOCTORS</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/about">
            <li className="py-1">ABOUT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
          <NavLink to="/contact">
            <li className="py-1">CONTACT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        </ul>
        <div className="relative flex items-center gap-4">
          {user ? (
            <div ref={dropdownRef}>
              <img
                className="w-10 cursor-pointer rounded-full"
                src={assets.profile_pic}
                alt=""
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <ul className="py-2">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionClick("/appointments")}
                    >
                      My Appointments
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionClick("/profile")}
                    >
                      My Profile
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-primary px-8 py-4 rounded-full font-black hidden md:block "
            >
              create account
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
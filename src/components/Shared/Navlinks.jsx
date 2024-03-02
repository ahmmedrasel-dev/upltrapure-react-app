import React, { useContext, useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthenticateContext } from "../../context/AuthContext";

const Navlinks = () => {
  const { isLoggedIn, logout, user } = useContext(AuthenticateContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownRef]);

  const handleSignOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <li>
        <NavLink className="text-black" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black" to="/services">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black" to="/gellary">
          Gellary
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black" to="/news">
          News
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black" to="/contact">
          Contact Us
        </NavLink>
      </li>
      {isLoggedIn && (
        <>
          <li className="relative" ref={dropdownRef}>
            <button className="text-black" onClick={toggleDropdown}>
              {user?.name} <FaCaretDown />
            </button>
            <ul
              className={`absolute z-50 bg-white rounded-md shadow-md p-2 ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </li>
        </>
      )}
    </>
  );
};

export default Navlinks;

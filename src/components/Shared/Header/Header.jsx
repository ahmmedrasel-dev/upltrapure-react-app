/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navlinks from "../Navlinks";
import logo from "../../../assets/images/logo.png";
import "./header.css";
import HeaderTop from "./HeaderTop";

const Header = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = scrollRef.current.scrollTop;

    if (scrollTop > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <>
      <HeaderTop></HeaderTop>
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div
          className="drawer-content flex flex-col"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          <div className={`${isSticky ? "sticky" : ""} bg-gray`}>
            <div className={`navbar max-w-screen-xl mx-auto`}>
              <div className="flex-1 px-2 mx-2">
                <Link to="/">
                  <img src={logo} className="w-64" alt="" />
                </Link>
              </div>
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>

              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  <Navlinks />
                </ul>
              </div>
            </div>
          </div>
          <div>{children}</div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[80%] bg-base-100">
            <Navlinks />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

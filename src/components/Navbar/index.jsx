import { AiOutlineCaretDown } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
// import Dropdown from "./Dropdown";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [top, setTop] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 40 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [top]);
  return (
    <>
      <nav className="">
        <div
          className={`${
            top ? "bg-[#f3f6f8]" : "lg:fixed z-50 bg-white w-full"
          } flex justify-center `}
        >
          <div
            className={`${
              top
                ? "xl:w-[1320px] w-full lg:bg-[#00B98E] bg-white lg:border-b lg:border-[#33C7A5]"
                : "w-full bg-white"
            }`}
          >
            <div className="px-7 lg:px-12">
              <div className="flex justify-between items-center">
                <h1
                  className={`Inter text-[40px] ${
                    top ? "lg:text-white text-[#00B98E]" : "text-[#00B98E]"
                  }  font-bold py-4`}
                >
                  BizConsult
                </h1>
                <ul className="hidden lg:flex lg:items-center lg:gap-7 ">
                  <li className="hoverAndActive py-4">
                    <NavLink
                      className={`${
                        top ? "text-white" : "text-black"
                      } text-base font-semibold Hebo nav-link active`}
                      to={"/"}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="hoverAndActive py-4">
                    <NavLink
                      className={`${
                        top ? "text-white" : "text-black"
                      } text-base font-semibold Hebo`}
                      to={"/about"}
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="hoverAndActive py-4">
                    <NavLink
                      className={`${
                        top ? "text-white" : "text-black"
                      } text-base font-semibold Hebo`}
                      to={"/servis"}
                    >
                      Service
                    </NavLink>
                  </li>
                  <li
                    className={`hoverAndActive py-4 ${
                      !top && "HoverAndActive  py-4"
                    }`}
                  >
                    <p
                      className={`${
                        top ? "text-white" : "text-black"
                      } text-base font-semibold Hebo flex items-center gap-2 h-[]`}
                    >
                      Pages
                      <AiOutlineCaretDown className={top ? "" : ""} />
                      <div className="overflow-hidden absolute top-24 w-36 rounded-md z-20 Drop bg-white h-[100px] ">
                        <NavLink
                          to={"/feature"}
                          className="block text-[#666565] font-medium cursor-pointer pl-4 hover:bg-slate-300 pb-1"
                        >
                          Feature
                        </NavLink>
                        <NavLink
                          to={"/quote"}
                          className="block text-[#666565] font-medium cursor-pointer pl-4 hover:bg-slate-300 pb-1"
                        >
                          Free Quote
                        </NavLink>
                        <NavLink
                          to={"/"}
                          className="block text-[#666565] font-medium cursor-pointer pl-4 hover:bg-slate-300 pb-1"
                        >
                          Our Team
                        </NavLink>
                        <NavLink
                          to={"/team"}
                          className="block text-[#666565] font-medium cursor-pointer pl-4 hover:bg-slate-300 pb-1"
                        >
                          Testiminial
                        </NavLink>
                        <NavLink
                          to={"/not"}
                          className="block text-[#666565] font-medium cursor-pointer pl-4 hover:bg-slate-300 pb-1"
                        >
                          404 Page
                        </NavLink>
                      </div>
                    </p>
                  </li>
                  <li className="hoverAndActive py-4">
                    <NavLink
                      className={`${
                        top ? "text-white" : "text-black"
                      } text-base font-semibold Hebo`}
                      to={"/contact"}
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-white flex items-center text-base font-semibold Hebo"
                      to={"/contact"}
                    >
                      <button className="bg-[#f5f7f9] border border-[#f5f7f9] rounded-3xl text-[#00B98E] py-2 px-6 ml-7">
                        Free Quote
                      </button>
                    </NavLink>
                  </li>
                </ul>
                <div className="block lg:hidden tranzition">
                  {isOpen ? (
                    <button onClick={handleClick}>
                      <CgClose className="block h-6 w-6" aria-hidden="true" />
                    </button>
                  ) : (
                    <button onClick={handleClick}>
                      <RxHamburgerMenu
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center lg:hidden">
        <div className="xl:w-[1320px] md:w-[90%] w-[90%]">
          <ul
            className={` ${
              isOpen ? "h-full block" : "h-0"
            }  overflow-hidden tranzition border-t border-[#DDDDDD]`}
          >
            <li className="hoverAndActive py-2">
              <NavLink
                className="text-black active:text-[#00B98E] text-base font-semibold Hebo nav-link active"
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li className="hoverAndActive py-2">
              <NavLink
                className="text-black active:text-[#00B98E] text-base font-semibold Hebo "
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li className="hoverAndActive py-2">
              <NavLink
                className="text-black active:text-[#00B98E] text-base font-semibold Hebo"
                to={"/servis"}
              >
                Service
              </NavLink>
            </li>
            <li
              className={`hoverAndActive py-4 ${
                !top && "HoverAndActive  py-4"
              }`}
            >
              <p
                className={`${
                  top ? "lg:text-white text-black" : "text-black"
                } text-base font-semibold Hebo flex items-center gap-2 h-[]`}
              >
                Pages
                <AiOutlineCaretDown className={top ? "" : ""} />
                <div className="overflow-hidden absolute top-[270px] w-36 rounded-md z-20 Drop bg-white h-[100px] ">
                  <NavLink
                    to={"/feature"}
                    className="block text-[#666565] font-medium cursor-pointer pl-4 hover:bg-slate-300 pb-1"
                  >
                    Feature
                  </NavLink>
                  <NavLink
                    to={"/quote"}
                    className="block text-[#666565] font-medium cursor-pointer pl-4 hover:bg-slate-300 pb-1"
                  >
                    Free Quote
                  </NavLink>
                  <NavLink
                    to={"/"}
                    className="block text-[#666565] font-medium cursor-pointer pl-4 hover:bg-slate-300 pb-1"
                  >
                    Our Team
                  </NavLink>
                  <NavLink
                    to={"/team"}
                    className="block text-[#666565] font-medium cursor-pointer pl-4 hover:bg-slate-300 pb-1"
                  >
                    Testiminial
                  </NavLink>
                  <NavLink
                    to={"/not"}
                    className="block text-[#666565] font-medium cursor-pointer pl-4 hover:bg-slate-300 pb-1"
                  >
                    404 Page
                  </NavLink>
                </div>
              </p>
            </li>
            <li className="hoverAndActive py-2">
              <NavLink
                className="text-black active:text-[#00B98E] text-base font-semibold Hebo"
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                className="text-black active:text-[#00B98E] flex items-center text-base font-semibold Hebo"
                to={"/"}
              >
                <button className="bg-[#f5f7f9] border border-[#f5f7f9] rounded-3xl text-[#00B98E] py-2 px-6">
                  Free Quote
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

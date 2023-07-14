import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
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
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`inline-flex w-full ${
            top ? "text-white" : "text-black"
          } text-base font-semibold Hebo`}
        >
          Pages
          <ChevronDownIcon
            className={`-mr-1 h-5 w-5 ${top ? "text-white" : "text-black"}`}
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-9 w-40 origin-top-right rounded-[4px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to={"/feature"}
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700  font-semibold",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Feature
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to={"/quote"}
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700  font-semibold",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Free Quote
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to={"/team"}
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700  font-semibold",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Our Team
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to={"/"}
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700  font-semibold",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Testimonial
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to={"/not"}
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700  font-semibold",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  404 Page
                </NavLink>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

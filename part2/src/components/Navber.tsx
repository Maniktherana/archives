/* This example requires Tailwind CSS v2.0+ */

import { Disclosure, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
import Edvolve_Logo from "../assets/Edvolve_Logo_Full_New.webp";
import Search from "./Search";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Experience Zone", href: "#", current: false },
  { name: "Learning Zone", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white drop-shadow-md ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-3">
            <div className="relative flex items-center justify-between h-16 w-full">
              <div className="flex flex-row items-center">
                <div className=" inset-y-0 left-0 flex items-center mr-2 mb-[-11px] lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <img
                  className="block lg:hidden h-8 w-auto"
                  src={Edvolve_Logo}
                  alt="Workflow"
                />
              </div>
              <div className="flex-1 flex h-15 justify-between sm:items-stretch sm:justify-start">
                <div className="hidden lg:flex items-center">
                  <img className="h-8 w-30" src={Edvolve_Logo} alt="Edvolve" />
                </div>
                <div className="hidden lg:flex lg:items-center lg:mt-4 sm:ml-6">
                  <div className="flex space-x-4 items-end">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-black border-b-4 border-yellow-500"
                            : "text-black hover:bg-gray-100",
                          "px-3 py-2 text-center text-sm font-medium h-12"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:flex flex-row items-center ml-7">
                  <Search />
                  <button
                    type="button"
                    className="bg-[#2a2a2a] p-[0.25rem] ml-40 font-light text-xs rounded-md text-white hover:bg-[#474747] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <div className="flex flex-row items-center justify-between">
                      <PlayIcon className="block w-6 h-6 mr-1" />
                      <p className="mr-3">Discovery Zone</p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 hidden md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div className="flex flex-row items-center">
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80"
                        alt="John Doe"
                      />
                    </Menu.Button>
                    <h5 className="text-black font-semibold m-4">John Doe</h5>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? "bg-black text-white" : "text-black",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

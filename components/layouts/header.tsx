import React from "react";
import Image from "next/image";
import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
function Header() {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="flex h-28 lg:h-36 justify-between px-10 lg:px-16 items-center">
      <Link href="/">
        <div className="flex items-center cursor-pointer text-3xl font-bold text-red-700">
          DIVYANSHU
        </div>
      </Link>
      <ul className="flex justify-between">
        {/* Right now a li tag but once all the components are made will channge it to Link tag   */}
        <Link href="/experience">
          <li className="text-xl tracking-wide font-medium hover:text-slate-400 cursor-pointer lg:flex hidden">
            Experience
          </li>
        </Link>
        <Link href="project">
          <li className="text-xl tracking-wide ml-10 font-medium cursor-pointer hover:text-slate-400 lg:flex hidden">
            Projects
          </li>
        </Link>
        <Link href="/about">
          <li className="text-xl ml-10 font-medium tracking-wide cursor-pointer hover:text-slate-400 lg:flex hidden">
            About
          </li>
        </Link>
        <li
          onClick={scrollToBottom}
          className="text-xl ml-10 font-medium tracking-wide cursor-pointer hover:text-slate-400 lg:flex hidden"
        >
          Contact
        </li>
      </ul>
      <div className=" z-50 lg:hidden">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={50}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={50}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="z-0 rounded-md border-4 bg-black scroll border-red-800 top-28 absolute right-0 w-full h-full">
            <div className="z-0 list-none grid place-items-center h-full ">
              <div className="flex flex-col items-center">
                {/* Right now a li tag but once all the components are made will channge it to Link tag   */}
                <Link href="/experience">
                  <li className="text-3xl  tracking-wider  mb-8 font-semibold hover:text-slate-400">
                    Experience
                  </li>
                </Link>
                <Link href="project">
                  <li className="text-3xl   tracking-wider  mb-8 font-semibold hover:text-slate-400">
                    Project
                  </li>
                </Link>
                <Link href="/about">
                  <li className="text-3xl  tracking-wider  mb-8 font-semibold hover:text-slate-400">
                    About
                  </li>
                </Link>
                <li
                  onClick={scrollToBottom}
                  className="text-3xl  tracking-wider  mb-8 font-semibold hover:text-slate-400"
                >
                  Contact
                </li>
              </div>
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  <Image
                    src="/Alexa.png"
                    alt="alexa-logo"
                    height="40"
                    width="45"
                  ></Image>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;

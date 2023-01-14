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
    <nav className="flex h-28 lg:h-36 justify-between px-8 lg:px-16 items-center">
      <Link href="/">
        <div className="flex items-center cursor-pointer text-3xl font-bold text-red-700">
          DIVYANSHU
        </div>
      </Link>
      <ul className="flex justify-between">
        {/* Right now a li tag but once all the components are made will channge it to Link tag   */}
        <Link href="/about">
          <li className="text-xl font-medium tracking-wide cursor-pointer hover:text-slate-400 lg:flex hidden">
            About
          </li>
        </Link>
        <Link href="/communities">
          <li className="text-xl ml-10 tracking-wide font-medium hover:text-slate-400 cursor-pointer lg:flex hidden">
            Communities
          </li>
        </Link>
        <Link href="project">
          <li className="text-xl tracking-wide ml-10 font-medium cursor-pointer hover:text-slate-400 lg:flex hidden">
            Projects
          </li>
        </Link>
        <Link href="achievements">
          <li className="text-xl tracking-wide ml-10 font-medium cursor-pointer hover:text-slate-400 lg:flex hidden">
            Achievements
          </li>
        </Link>
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
                <Link href="/communities">
                  <li className="text-3xl  tracking-wider  mb-8 font-semibold hover:text-slate-400">
                    Communities
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
                <Link href="/achievements">
                  <li className="text-3xl  tracking-wider  mb-8 font-semibold hover:text-slate-400">
                    Achievements
                  </li>
                </Link>
              </div>
              <Link href="/">
                <div className="flex items-center cursor-pointer text-3xl font-bold text-red-700">
                  DIVYANSHU
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

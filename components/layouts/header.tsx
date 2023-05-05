import React, { FunctionComponent } from "react";
import { useState, useRef, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
const Header: FunctionComponent = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setToggleMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return (
    <div>
      <nav className="flex h-28 lg:h-36 justify-between px-8 lg:px-16 items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer text-3xl font-bold text-red-700">
            DIVYANSHU
          </div>
        </Link>
        <ul className="flex justify-between">
          {/* Right now a li tag but once all the components are made will channge it to Link tag   */}
          <Link href="/about" onClick={() => setToggleMenu(false)}>
            <li className="text-xl font-medium tracking-wide cursor-pointer hover:text-slate-400 lg:flex hidden">
              ABOUT
            </li>
          </Link>
          <Link href="/experiences">
            <li className="text-xl ml-10 tracking-wide font-medium hover:text-slate-400 cursor-pointer lg:flex hidden">
              EXPERIENCES
            </li>
          </Link>
          <Link href="project">
            <li className="text-xl tracking-wide ml-10 font-medium cursor-pointer hover:text-slate-400 lg:flex hidden">
              PROJECTS
            </li>
          </Link>
          <Link href="achievements">
            <li className="text-xl tracking-wide ml-10 font-medium cursor-pointer hover:text-slate-400 lg:flex hidden">
              ACHIEVEMENTS
            </li>
          </Link>
          <Link href="feeds">
            <li className="text-xl tracking-wide ml-10 font-medium cursor-pointer hover:text-slate-400 lg:flex hidden">
              FEEDS
            </li>
          </Link>
        </ul>
        <div className=" z-50 lg:hidden" ref={ref}>
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
                  <Link href="/about">
                    <li className="md:text-3xl text-2xl  tracking-wider  mb-8 font-semibold hover:text-slate-400">
                      ABOUT
                    </li>
                  </Link>
                  <Link href="/experiences">
                    <li className="md:text-3xl text-2xl tracking-wider  mb-8 font-semibold hover:text-slate-400">
                      EXPERIENCES
                    </li>
                  </Link>
                  <Link href="project">
                    <li className="md:text-3xl text-2xl   tracking-wider  mb-8 font-semibold hover:text-slate-400">
                      PROJECT
                    </li>
                  </Link>

                  <Link href="/achievements">
                    <li className="md:text-3xl text-2xl  tracking-wider  mb-8 font-semibold hover:text-slate-400">
                      ACHIEVEMENTS
                    </li>
                  </Link>
                  <Link href="/feeds">
                    <li className="md:text-3xl text-2xl  tracking-wider  mb-8 font-semibold hover:text-slate-400">
                      FEEDS
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
    </div>
  );
};

export default Header;

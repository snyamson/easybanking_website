/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import RequestInviteBtn from "./requestInviteBtn";
import { debounce } from "../utilities/helpers";

const Header = () => {
  const links = ["Home", "About", "Contact", "Blog", "Careers"];

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const [prevScrollPos, setprevScrollpos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      setprevScrollpos(currentScrollPos);
      console.log(prevScrollPos);
    }, 100);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <>
      <header
        className={`${
          visible ? "top-0" : "-top-20"
        } transition-all duration-500 hidden lg:block w-screen h-20 overflow-hidden fixed z-30 bg-neutral-white shadow-sm `}
      >
        <div className="w-full h-full flex items-center justify-between px-28 ">
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="logo" />
            </a>
          </Link>
          <nav>
            <ul className="flex">
              {links.map((link) => (
                <li
                  key={link}
                  className="
             relative
             -bottom-0
              px-2
              after:block 
              after:w-full 
              after:h-1
            after:bg-primary-lime_green
            after:relative
            after:-bottom-6
            after:rounded-full
             after:transition duration-1000
            after:transform
            after:scale-0
            hover:after:scale-100
            "
                >
                  <Link href="/">
                    <a className="px-2">{link}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <RequestInviteBtn />
        </div>
      </header>

      {/* Mobile Navigator */}
      <header
        className={`lg:hidden w-screen h-20 flex items-center justify-between px-10 overflow-hidden fixed top-0 z-30 shadow-sm bg-neutral-white `}
      >
        <nav className="w-full ">
          <div className="h-full w-full flex justify-between">
            <div>
              <Link href="/">
                <a>
                  <img src="/logo.svg" alt="logo" />
                </a>
              </Link>
            </div>
            <div className="cursor-pointer" onClick={toggleNav}>
              <img
                src={`/icon-${navOpen ? "close" : "hamburger"}.svg`}
                alt={`${navOpen ? "close" : "menu"}`}
              />
            </div>
          </div>
        </nav>
      </header>

      {/* Nav Menu Items */}
      <nav
        className={`${
          navOpen ? "block" : "hidden"
        } w-10/12 h-80 bg-neutral-white absolute z-20 top-28  rounded-md lg:hidden `}
        style={{
          left: "8.3%",
        }}
      ></nav>

      {/* Backdrop */}
      <div
        className={`${
          navOpen ? "block" : "hidden"
        } absolute h-screen w-screen z-10 bg-black bg-opacity-40 lg:hidden `}
      />
    </>
  );
};

export default Header;

"use client";
import { useEffect, useState } from "react";
import { Menu, StartButton } from "./NavBar";
import Logo from "./Logo";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <header
      className={`flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-3 sm:py-0 ${
        isScroll ? "fixed bg-transparent" : "bg-black"
      }`}
    >
      <nav
        className={`${
          isScroll
            ? "max-w-[65rem] bg-neutral-700/30 backdrop-blur-md rounded-full mt-2 px-4 py-1 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.15)_inset]"
            : "max-w-[85rem] lg:px-8 py-8"
        } relative w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 transition-all duration-500`}
        aria-label="Global"
      >
        <Logo />
        {/* Ensure the Menu in the center of page */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Menu
            className={`${isScroll ? "" : "border border-white/[0.2] px-10"}`}
          />
        </div>
        <StartButton />
      </nav>
    </header>
  );
};
export default Header;

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Icons for the hamburger menu

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`header absolute w-full flex justify-between items-center pt-4 px-5 bg-white md:bg-transparent md:shadow-none md:h-[100px] md:pt-8 z-20 lg:px-20 2xl:px-36 ${
        menuOpen ? "" : "shadow-lg"
      }`}
    >
      <img
        src="/images/branding/logo.svg"
        alt="logo"
        className="pb-4 h-14 md:h-auto mb:pb-0"
      />
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col md:flex-row  md:flex gap-6 md:border-l-2 md:border-gray-500 my-4 pb-8 pl-8 text-lg shadow-lg rounded-b-lg font-medium items-start md:pb-0 md:items-center absolute md:rounded-none md:shadow-none md:relative top-full left-0 md:top-0 md:left-auto md:transform-none bg-white md:bg-transparent w-full md:w-auto z-10 md:z-0`}
      >
        <li>About Us</li>
        <li>Our Work</li>
        <li
          className="bg-orange-500 border-2 rounded-[12px] border-black shadow-lg px-4 md:py-4"
          style={{ boxShadow: "3px 3px 0px 0px #767676" }}
        >
          <Link href="#">Feel Free To Reach Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

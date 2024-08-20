import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="header absolute w-full flex justify-between md:h-[100px] items-center md:pt-8 z-10 md:px-20 2xl:px-36">
      <img src="/images/branding/logo.svg" alt="logo" />
      <ul className="flex gap-6 border-l-2 border-gray-500 my-4 pl-8 text-lg font-medium items-center">
        <li>About Us</li>
        <li>Our Work</li>

        <li
          className="bg-orange-500 border-2 rounded-[12px] border-black shadow-lg px-4 py-4"
          style={{ boxShadow: "3px 3px 0px 0px #767676" }}
        >
          <Link href="#">Feel Free To Reach Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

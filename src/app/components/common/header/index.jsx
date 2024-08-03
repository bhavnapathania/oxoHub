import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="header absolute w-full flex justify-between h-[100px] items-center pt-8 z-10 px-20">
      <img src="/images/branding/logo.svg" alt="logo" />
      <ul className="flex gap-4 border-l-2 border-gray-500 py-4 px-8 text-lg font-medium items-center">
        <li>About Us</li>
        <li>Our Work</li>

        <li className="bg-orange-500 border-2 rounded-[12px] border-black shadow-lg p-4">
          <Link href="#">Feel Free To Reach Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

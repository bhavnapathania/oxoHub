import React from "react";
import Linking from "../link";
import { socialLinks, impLinks, contactLinks } from "@/app/constants";

function Footer() {
  return (
    <section className="flex flex-col border-t border-gray-500 px-20 2xl:px-36">
      {/* Top Row: Important Links, Contact Us, Logo */}
      <div className=" w-full flex justify-between mt-8 mb-4">
        <div className="flex gap-4 flex-col">
          <h4 className="text-2xl font-semibold">Important Links</h4>
          <ul className="flex gap-2 flex-col">
            {impLinks.map((link, index) => (
              <li key={index}>
                <Linking path={link.path} data={link.label} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4 flex-col">
          <h4 className="text-2xl font-semibold">Contact Us</h4>
          <ul className="flex gap-2 flex-col">
            {contactLinks.map((link, index) => (
              <li key={index}>
                <Linking path={link.path} data={link.label} />
              </li>
            ))}
          </ul>
        </div>
        <img
          src="/images/branding/logo.svg"
          alt="logo"
          className="w-[155px] h-[56px]"
        />
      </div>

      {/* Bottom Row: Social Media Icons and Copyright Text */}
      <div className="flex justify-between mb-4">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((item, index) => (
            <Linking
              key={index}
              path={item.path}
              data={
                <img className="h-6 w-6" src={item.icon} alt={item.label} />
              }
            />
          ))}
        </div>
        {/* Copyright Text */}
        <p className="text-sm text-gray-600 text-right">
          © Xohub Inc, all rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;

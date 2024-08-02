import React from "react";
import Linking from "../link";
import { socialLinks, impLinks, contactLinks } from "@/app/constants";

function Footer() {
  return (
    <section className="flex gap-4 flex-col border-t-2 border-gray-500 ">
      <div className="w-full flex justify-between mt-8">
        <div className="flex gap-4 flex-col">
          <h4 className="text-2xl font-semibold ">Important Links</h4>
          <ul className="flex gap-2 flex-col">
            {impLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Linking path={link.path} data={link.label} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-4 flex-col">
          <h4 className="text-2xl font-semibold ">Contact Us</h4>
          <ul className="flex gap-2 flex-col">
            {contactLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Linking path={link.path} data={link.label} />
                </li>
              );
            })}
          </ul>
        </div>
        <img src="/images/branding/logo.svg" alt="logo" />
      </div>
      <div className="flex justify-between">
        <div></div>
        <div className="flex gap-4 ">
          {socialLinks.map((item, index) => {
            return (
              <Linking
                key={index}
                path={item.path}
                data={<img className="" src={item.icon} alt={item.label} />}
              />
            );
          })}
        </div>
        <p>© Xohub Inc, all rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;

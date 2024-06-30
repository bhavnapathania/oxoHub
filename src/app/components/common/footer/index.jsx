import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section className="flex gap-4">
      <div className="flex ">
        <div>
          <h4>Important Links</h4>
        </div>
        <div></div>
        <img src="/images/branding/logo.svg" alt="logo" />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4 " >
            <Link href="#">
            <img src="/images/icons/insta.svg" alt="logo" />
            </Link>
            <Link href="#">
            <img src="/images/icons/fb.svg" alt="logo" />
            </Link>
            <Link href="#">
            <img src="/images/icons/twitter.svg" alt="logo" />
            </Link>
            <Link href="#">
            <img src="/images/icons/yt.svg" alt="logo" />
            </Link>
        </div>
        <p>© Xohub Inc, all rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;

import React from "react";
import {Link} from "react-router";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link className="hover:underline" to="/about">About us</Link>
        <Link className="hover:underline" to="/contact">Contact</Link>
        <Link className="hover:underline" to="/jobs">Jobs</Link>
        <Link className="hover:underline" >Press</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/coffeeshopldn" target="_blank">
            <FaTwitter size={25}/>
          </a>
          <a href="https://www.youtube.com/watch?v=j51HAj-QFjY" target="_blank">
            <IoLogoYoutube size={25} />
          </a>
          <a href="https://www.facebook.com/officialcoffeeshop/" target="_blank">
            <FaFacebookF size={25}/>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

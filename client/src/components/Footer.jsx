import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-violet-900">
      <div className="">
        <div className="flex gap-4 flex-col md:flex-row justify-between items-center pb-5  border-b border-white/20 p-5">
          <h2 className="text-4xl text-white font-bold  text-center">
            Eduzeno
          </h2>
          <div className="flex gap-4 items-center text-violet-700">
            <Link to="https://www.facebook.com/">
              <FaFacebookF className="text-4xl bg-white p-2 rounded-full" />
            </Link>
            <Link to="https://www.x.com/">
              <FaXTwitter className="text-4xl bg-white p-2 rounded-full" />
            </Link>
            <Link to="https://www.tiktok.com/">
              <FaTiktok className="text-4xl bg-white p-2 rounded-full" />
            </Link>
            <Link to="https://www.linkedin.com/">
              <FaLinkedinIn className="text-4xl bg-white p-2 rounded-full" />
            </Link>
            <Link to="https://www.youtube.com/">
              <FaYoutube className="text-4xl bg-white p-2 rounded-full" />
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-10 m-8">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4 pb-1">
              About
            </h3>
            <ul className="space-y-2 text-gray-300 ">
              <li className="border-b border-white/20 py-2 hover:pl-2  transition-all">
                <Link to="/">About us</Link>
              </li>
              <li className="border-b border-white/20 py-2 hover:pl-2  transition-all">
                <Link to="/">Careers</Link>
              </li>
              <li className="border-b border-white/20 py-2 hover:pl-2  transition-all">
                <Link to="/">Contact us</Link>
              </li>
              <li className="border-b border-white/20 py-2 hover:pl-2  transition-all">
                <Link to="/">Blog</Link>
              </li>
              <li className="border-b border-white/20 py-2 hover:pl-2  transition-all">
                <Link to="/">Investors</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-4 pb-1">
              Discover Eduzeno
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="border-b border-white/20 py-2 hover:pl-2  transition-all">
                <Link to="/">Get the app</Link>
              </li>
              <li className="border-b border-white/20 py-2 hover:pl-2  transition-all">
                <Link to="/">Teach on Eduzeno</Link>
              </li>
              <li className="border-b border-white/20 py-2 hover:pl-2  transition-all">
                <Link to="/">Plans and Pricing</Link>
              </li>
              <li className="border-b border-white/20 py-2 hover:pl-2  transition-all">
                <Link to="/">Affiliate</Link>
              </li>

              <li className="border-b border-white/20 py-2 hover:pl-2  transition-all">
                <Link to="/">Help and Support</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-4 pb-1">
              Eduzeno for Business
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="border-b border-white/20 py-2 hover:pl-2  transition-all">
                <Link to="/">Eduzeno Business</Link>
              </li>
              <li className="border-b border-white/20 py-2 hover:pl-2  transition-all">
                <Link to="/">plans & pricing</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-4 pb-1">
              Contact
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <span>Address: Cumilla,Bangladesh.</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Phone: 0850000000</span>
              </div>

              <div className="flex items-center gap-3">
                <span>Email: eduzeno@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Trade license: 145782</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Support Number: 081-65968</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-5  border-t border-white/20 p-5 text-white">
          <p className="text-sm">© 2025 eduzeno llc. All rights reserved.</p>
          <ul className="text-sm flex items-center gap-3">
            <li>
              <Link to="/">Privacy </Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
            <li>
              <Link to="/">Cookie</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

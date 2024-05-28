import React, { useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu }) => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-slate-950 px-8 pb-6 pt-24 text-white transition-all duration-200 md:hidden`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>ACHBANI Omar</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li>
              <a href="/#home" className="mb-5 inline-block">
                Home
              </a>
            </li>
            <li>
              <div className="mb-5 inline-block cursor-pointer">
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={toggleServicesDropdown}
                >
                  <span>Services</span> <FaCaretDown />
                </div>
                {showServicesDropdown && (
                  <ul className="ml-4 mt-2 space-y-2 text-lg">
                    <li>
                      <a href="/#web-development">Web Development</a>
                    </li>
                    <li>
                      <a href="/#ios-app-development">iOS App Development</a>
                    </li>
                    <li>
                      <a href="/#android-app-development">Android App Development</a>
                    </li>
                    <li>
                      <a href="/#cloud-services">Cloud Services</a>
                    </li>
                    <li>
                      <a href="/#mobile-app-design">Mobile App Design</a>
                    </li>
                    <li>
                      <a href="/#seo-optimization">SEO Optimization</a>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <a href="/#about-us" className="mb-5 inline-block">
                About us
              </a>
            </li>
            <li>
              <a href="/#contact" className="mb-5 inline-block">
                Contact
              </a>
            </li>
            <li>
              <a href="/#privacy-policy" className="mb-5 inline-block">
                Privacy policy
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>© 2024 All Rights Reserved OmarS</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;

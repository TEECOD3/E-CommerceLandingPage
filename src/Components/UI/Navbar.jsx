import React from "react";
import logo from "../../assets/logo.svg";
import CartIcon from "../Icons/IconCart";
import avatar from "../../assets/image-avatar.png";

const Navabar = () => {
  return (
    <nav className="h-28 ">
      <div className="h-24 max-w-6xl mx-auto  border-b-2 flex justify-between items-center w-full px-2">
        <div className="flex w-1/2 justify-between items-center">
          <img src={logo} className="w-44 h-6" alt="sneakers logo" />
          <ul className="flex justify-between w-[65%] text-[#b6bcc8] font-[600] capitalize">
            <li>
              <a href="#">collection</a>
            </li>
            <li>
              <a href="#">men</a>
            </li>
            <li>
              <a href="#">women</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center ">
          <div className="mr-10 relative ">
            <span className="absolute bg-orange-400 rounded-full w-4 h-4  text-[12px]  text-white flex items-center justify-center top-[-0.5rem] right-[-0.6rem]">
              2
            </span>
            <CartIcon />
          </div>

          <img src={avatar} className="w-10" alt="avatar-image" />
        </div>
      </div>
    </nav>
  );
};

export default Navabar;

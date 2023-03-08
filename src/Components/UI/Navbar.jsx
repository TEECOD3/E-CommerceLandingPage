import React from "react";
import logo from "../../assets/logo.svg";
import CartIcon from "../Icons/IconCart";
import { useState } from "react";
import avatar from "/images/image-avatar.png";
import iconclose from "../../assets/icon-close.svg";
import iconmenu from "../../assets/icon-menu.svg";

const Navabar = (props) => {
  const [modalState, setModalstate] = useState(false);
  const { cart, Cartshowing } = props;
  return (
    <nav className="p-4 ">
      <div className="h-24 max-w-6xl mx-auto border-b-2 flex justify-between lg:gap-[38rem] items-center  md:gap-[10rem] w-full px-2">
        <div className="flex  gap-6 max-sm:gap-2 items-center">
          <img
            src={iconmenu}
            alt="iconmenu"
            className="lg:hidden md:hidden cursor-pointer"
            onClick={() => {
              setModalstate(true);
            }}
          />

          {modalState && (
            <nav className="absolute w-[75%] h-[150%] md:hidden lg:hidden bg-white left-0 top-0 z-50 bottom-0">
              <ul className="lg:hidden flex flex-col items-start mt-4 h-full gap-5 capitalize ml-8 font-bold">
                <img
                  src={iconclose}
                  alt="closeicon"
                  className="h-5 w-5 cursor-pointer mb-16"
                  onClick={() => {
                    setModalstate(false);
                  }}
                />

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
            </nav>
          )}
          <img src={logo} className="" alt="sneakers logo" />
          <ul className="flex gap-6  text-[#b6bcc8] font-[600] capitalize max-sm:hidden max-md:hidden">
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

        <div className="flex items-center max-sm:mr-[-8rem] ">
          <div className="mr-10 max-sm:mr-5 relative ">
            <span className="absolute bg-orange-400 rounded-full w-4 h-4  text-[12px]  text-white flex items-center justify-center top-[-0.5rem] right-[-0.6rem]">
              2
            </span>
            <div
              className="cursor-pointer"
              onClick={() => {
                if (Cartshowing === false) {
                  cart(true);
                } else if (Cartshowing === true) {
                  cart(false);
                }
              }}
            >
              <CartIcon />
            </div>
          </div>

          <img
            src={avatar}
            className="w-10 cursor-pointer"
            alt="avatar-image"
          />
        </div>

        <div className="">
          <div className="">
            <h1></h1>
          </div>

          <div className=""></div>
        </div>
      </div>
    </nav>
  );
};

export default Navabar;

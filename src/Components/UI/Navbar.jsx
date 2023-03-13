import React from "react";
import logo from "../../assets/logo.svg";
import CartIcon from "../Icons/IconCart";
import { useState, useContext, useEffect } from "react";
import avatar from "/images/image-avatar.png";
import CartContext from "../../Store/CartContext";
import iconmenu from "../../assets/icon-menu.svg";
import Mobilenav from "./Mobilenav";

const Navabar = (props) => {
  const { cart } = props;
  const [modalState, setModalstate] = useState(false);
  const [animatecart, SetAnimatecart] = useState(false);
  const cartcontext = useContext(CartContext);
  const items = cartcontext.Items;

  const amountOfCart = items.reduce((currtotal, item) => {
    return currtotal + item.amount;
  }, 0);
  // const amountOfCart = items.length

  const amountClasses = `${"absolute bg-orange-400 rounded-full w-4 h-4  text-[12px]  z-10 text-white flex items-center justify-center top-0 right-0 "} ${
    animatecart ? "animate-bounce" : ""
  }`;

  const Cartclasses = `${"cursor-pointer p-1 max-sm:p-2 "} ${
    animatecart ? "animate-bounce" : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    SetAnimatecart(true);
    const timer = setTimeout(() => {
      SetAnimatecart(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <nav className="p-4 ">
      {modalState && <Mobilenav setModalstate={setModalstate} />}
      <div className="h-24 max-w-6xl mx-auto border-b-2 flex justify-between lg:gap-[34rem] items-center  md:gap-[10rem] w-full px-2">
        <div className="flex gap-6 max-sm:gap-2 items-center">
          <img
            src={iconmenu}
            alt="iconmenu"
            className="lg:hidden md:hidden cursor-pointer p-2"
            onClick={() => {
              setModalstate(true);
            }}
          />

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

        <div className="flex items-center  ">
          <div className=" mr-6 max-sm:mr-5 relative ">
            {items.length > 0 && (
              <span className={amountClasses}>{amountOfCart}</span>
            )}
            <div
              className={Cartclasses}
              onClick={() => {
                cart(true);
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

        {/* <div className="">
          <div className="">
            <h1></h1>
          </div>

          <div className=""></div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navabar;

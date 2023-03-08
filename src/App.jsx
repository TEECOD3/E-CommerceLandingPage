import React from "react";
import Navbar from "./Components/UI/Navbar";
import { useState } from "react";
import imagedata from "./Data/Data";
import PlusIcon from "./Components/Icons/IconPlus";
import MinusIcon from "./Components/Icons/IconMinus";
import Button from "./Components/UI/Button";
import Modal from "./Components/UI/Modal";
import Cart from "./Components/Cart/Cart";

function App() {
  const products = [...imagedata];
  const [currentVal, setCurrentVal] = useState(0);
  const [openModal, SetModal] = useState(false);
  const [modalcurrval, setmodalcurrval] = useState(0);
  const [cart, setCart] = useState(false);

  const { mainImage } = products[currentVal];
  const { mainImage: modalseries } = products[modalcurrval];
  return (
    <>
      {cart && (
        <Cart className="absolute z-[80] right-32 top-24 max-sm:right-0 max-sm:left-0 max-sm:w-[90%] max-sm:mx-auto max-sm:mt-5 " />
      )}
      {openModal && (
        <Modal
          onClick={() => {
            SetModal((prevmodal) => {
              !prevmodal;
            });
          }}
        >
          <div className="lg:p-4">
            <img
              onClick={() => {
                SetModal(true);
              }}
              src={modalseries}
              className="w-6/12 max-sm:w-full rounded-2xl mx-auto max-sm:rounded-none cursor-pointer"
            />

            <div className="flex max-sm:hidden mt-4 gap-4 justify-center w-full flex-wrap">
              {products.map((product, index) => (
                <li
                  key={product.id}
                  onClick={() => {
                    setmodalcurrval(index);
                  }}
                  className={`${
                    index === modalcurrval &&
                    "bg-orange-800 opacity-50 overflow-hidden rounded-xl border-2 border-orange-600"
                  } cursor-pointer`}
                >
                  <img
                    className={`rounded-xl w-16 `}
                    src={product.thumbNail}
                    alt="thumbnail-image"
                  />
                </li>
              ))}
            </div>
          </div>
        </Modal>
      )}
      <Navbar cart={setCart} Cartshowing={cart} />
      <main>
        <div className="flex max-sm:flex-col max-w-6xl max-sm:w-full mx-auto mt-4 max-sm:mt-[-15px] z-2 gap-10 max-md:gap-5 ">
          <div className=" w-1/2 max-sm:w-full ">
            <div className="lg:p-4">
              <img
                onClick={() => {
                  SetModal(true);
                }}
                src={mainImage}
                className="w-10/12 max-sm:w-full rounded-2xl mx-auto max-sm:rounded-none cursor-pointer"
              />

              <div className="flex max-sm:hidden mt-4 gap-4 justify-center w-full flex-wrap">
                {products.map((product, index) => (
                  <li
                    key={product.id}
                    onClick={() => {
                      setCurrentVal(index);
                    }}
                    className={`${
                      index === currentVal &&
                      "bg-orange-800 opacity-50 overflow-hidden rounded-xl border-2 border-orange-600"
                    } cursor-pointer`}
                  >
                    <img
                      className={`rounded-xl w-24`}
                      src={product.thumbNail}
                      alt="thumbnail-image"
                    />
                  </li>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2 max-sm:w-full flex flex-col justify-center max-sm:px-10 max-md:p-4 max-lg:p-8">
            <h1 className="text-orange-700 bg-slate-200/30  mb-4 rounded-lg font-semibold w-60 lg:w-[40%]  px-6 py-1 ">
              Sneaker Company
            </h1>
            <h2 className="text-5xl font-bold capitalize mb-8 max-sm:text-4xl">
              Fall Limited Edition Sneakers
            </h2>
            <p className="text-gray-400 font-medium mb-6">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer
            </p>

            <div className=" max-sm:flex justify-between">
              <ul className="flex mb-1">
                <li className="font-bold  mr-4"> $125.00</li>
                <li className="bg-orange-300/40 text-orange-600 font-bold px-2 rounded-md">
                  50%
                </li>
              </ul>
              <span className="text-gray-400 font-semibold">
                <s> $250.00</s>
              </span>
            </div>

            <form className="flex mt-8 max-sm:flex-col  ">
              <ul className="w-32 max-sm:w-full flex items-center justify-between rounded-xl mr-4 px-3 max-sm:py-2    bg-gray-200/40">
                <li>
                  <MinusIcon className="cursor-pointer h-1" />
                </li>
                <li>
                  <input
                    type="text"
                    value="0"
                    className="w-3 border-none outline-none  bg-gray-200/20 "
                  />
                </li>
                <li>
                  <img
                    className="cursor-pointer h-2"
                    src="./src/assets/icon-plus.svg"
                    alt="plus icon"
                  />
                </li>
              </ul>

              <Button className="capitalize hover:bg-orange-300 max-sm:w-full mt-2 flex text-sm justify-center max-sm:mt-4 items-center py-3">
                <img
                  src="./src/assets/icon-cart.svg"
                  alt="cart-icon"
                  className=" mr-2 h-4 "
                />
                add to cart
              </Button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

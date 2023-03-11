import React from "react";
import Navbar from "./Components/UI/Navbar";
import { useState, useContext, useEffect } from "react";
import data from "./Data/Data";
import Modal from "./Components/UI/Modal";
import Cart from "./Components/Cart/Cart";
import CartForms from "./Components/UI/CartForms";
import CartContext from "./Store/CartContext";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    setisloading(true);
    setTimeout(() => {
      setisloading(false);
    }, 3000);
  }, []);

  const products = { ...data };

  const cartctx = useContext(CartContext);
  const {
    id,
    price,
    percentagediscount,
    oldprice,
    newprice,
    sneakerstype,
    description,
    company,
    imagesdata,
  } = products;

  const onAddAmountHandler = (amount) => {
    cartctx.addToCart({
      id: id,
      amount: amount,
      price: price,
      thumbNail: imagesdata[0].thumbNail,
    });
  };

  const [currentVal, setCurrentVal] = useState(0);
  const [openModal, SetModal] = useState(false);
  const [modalcurrval, setmodalcurrval] = useState(0);
  const [cart, setCart] = useState(false);

  const { mainImage } = imagesdata[currentVal];
  const { mainImage: modalseries } = imagesdata[modalcurrval];

  return (
    <>
      {/* cart items selected */}
      {cart && (
        <Cart
          className="absolute z-[80] right-32 top-24 max-sm:right-0 max-sm:left-0 max-sm:w-[90%] max-sm:mx-auto max-sm:mt-5 "
          setCart={setCart}
        />
      )}

      {/* modal to show product in details */}
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
              className="w-6/12 max-sm:w-full rounded-2xl mx-auto max-sm:rounded-none cursor-pointer transition-all duration-75 ease-in"
            />

            <div className="flex max-sm:hidden mt-4 gap-4 justify-center w-full flex-wrap">
              {imagesdata.map((product, index) => (
                <div className="">
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
                      className={`rounded-xl w-16 transition-all duration-75 ease-in`}
                      src={product.thumbNail}
                      alt="thumbnail-image"
                    />
                  </li>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
      {/* end of modal */}

      <Navbar cart={setCart} />

      {isloading ? (
        <div className="w-full  h-[50vh] mt-20 flex items-center justify-center absolute ">
          <RingLoader loading={isloading} size={100} color="#ff7d1a" />
        </div>
      ) : (
        <main>
          <div className="flex max-sm:flex-col max-w-6xl max-sm:w-full mx-auto mt-4 max-sm:mt-[-15px] z-2 gap-10 max-md:gap-5 ">
            <div className=" w-1/2 max-sm:w-full ">
              <div className="lg:p-4">
                <div className="">
                  <img
                    onClick={() => {
                      SetModal(true);
                    }}
                    src={mainImage}
                    className="w-10/12 max-sm:w-full rounded-2xl mx-auto max-sm:rounded-none cursor-pointer"
                  />
                </div>

                <div className="flex max-sm:hidden mt-4 gap-4 justify-center w-full flex-wrap">
                  {products.imagesdata.map((product, index) => (
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
                {company}
              </h1>
              <h2 className="text-5xl font-bold capitalize mb-8 max-sm:text-4xl">
                {sneakerstype}
              </h2>
              <p className="text-gray-400 font-medium mb-6">{description}</p>

              <div className=" max-sm:flex justify-between">
                <ul className="flex mb-1">
                  <li className="font-bold  mr-4"> ${newprice}</li>
                  <li className="bg-orange-300/40 text-orange-600 font-bold px-2 rounded-md">
                    {percentagediscount}
                  </li>
                </ul>
                <span className="text-gray-400 font-semibold">
                  <s> ${oldprice}</s>
                </span>
              </div>
              <CartForms onAddAmount={onAddAmountHandler} />
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default App;

import React from "react";
import { useState, useContext } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import Button from "./Button";

const CartForms = (props) => {
  const { onAddAmount } = props;
  const [itemnumber, setItemNumber] = useState(0);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (itemnumber === 0) {
      return;
    }
    onAddAmount(itemnumber);
    setItemNumber(0);
  };

  const decrementHandler = () => {
    setItemNumber(itemnumber - 1);
    if (itemnumber <= 0) {
      setItemNumber(0);
    }
  };

  return (
    <>
      <form className="flex mt-8 max-sm:flex-col" onSubmit={onSubmitHandler}>
        <ul className="w-32 max-sm:w-full flex mt-2 h-12 items-center justify-between rounded-xl mr-4 px-3 max-sm:py-1 bg-gray-200/40">
          <li>
            <IoIosRemove
              className="cursor-pointer text-2xl  text-orange-400"
              onClick={decrementHandler}
            />
          </li>
          <li className="cursor-default">{itemnumber}</li>
          <li>
            <IoIosAdd
              className="text-orange-500 cursor-pointer h-14 text-3xl font-bold p-1"
              onClick={() => {
                setItemNumber((prev) => prev + 1);
              }}
            />
          </li>
        </ul>

        <Button
          className="capitalize hover:bg-orange-300 max-sm:w-full mt-2 flex text-sm justify-center max-sm:mt-4 items-center py-3"
          buttontypes={{ type: "submit" }}
        >
          <MdAddShoppingCart className="mr-2 text-white text-2xl" />
          add to cart
        </Button>
      </form>
    </>
  );
};

export default CartForms;

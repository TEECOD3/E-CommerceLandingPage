import React from "react";
import deleteicon from "../../assets/icon-delete.svg";
const CartItem = (props) => {
  const { price, amount, thumbNail, onDelete, totalamt } = props;

  const totalAmount = price * amount;
  return (
    <>
      <li className="">
        <h1 className="p-6 border-b-2 border-gray-300 font-bold ">Cart</h1>

        <div className="p-1 mt-2 gap-2">
          <div className="flex">
            <img src={thumbNail} alt="Cart-item-image" className="w-12 mr-3" />
            <div className=" text-gray-600/60 font-bold">
              <span>fall limited edition sneakers</span>
              <div className="font-bold">
                <span className=" text-gray-600/60 mr-1"> ${price} x</span>
                <span className="mr-3  text-gray-600/60">{amount}</span>
                <span className="font-bold text-black">${totalAmount}</span>
              </div>
            </div>
            <img
              onClick={onDelete}
              src={deleteicon}
              alt="deleteicon"
              className="w-3  h-4 absolute right-4 top-28 cursor-pointer"
            />
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;

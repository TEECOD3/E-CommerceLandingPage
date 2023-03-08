import React from "react";
import imagedata from "../../Data/Data";
import Button from "../UI/Button";
import CartItem from "./CartItem";

const data = [
  {
    id: 1,
    mainImage: "./images/image-product-1.jpg",
    thumbNail: "./images/image-product-1-thumbnail.jpg",
    amount: 3,
    price: 125,
  },
];
const Cart = (props) => {
  const { className } = props;
  return (
    <div
      className={`${"w-[21rem] p-4 rounded-xl shadow-2xl bg-white"} ${className}`}
    >
      {data.map((data) => (
        <ul key={data.id} className="mb-2">
          <CartItem
            thumbNail={data.thumbNail}
            amount={data.amount}
            price={data.price}
          />
        </ul>
      ))}
      <Button className="hover:bg-orange-300 w-full">Checkout</Button>
    </div>
  );
};

export default Cart;

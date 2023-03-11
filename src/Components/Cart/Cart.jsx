import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import Button from "../UI/Button";
import CartItem from "./CartItem";
import { IoCloseSharp } from "react-icons/io5";

const Cart = (props) => {
  const { className, setCart } = props;

  const cartCtx = useContext(CartContext);
  const details = cartCtx.Items;

  const deleteHandler = (id) => {
    cartCtx.removeFromCart(id);
  };

  return (
    <>
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        className={`${"w-[21rem] p-4 rounded-xl shadow-2xl bg-white"} ${className}`}
      >
        <div
          className="absolute right-6 text-gray-400 cursor-pointer p-4"
          onClick={() => {
            setCart(false);
          }}
        >
          <IoCloseSharp />
        </div>
        {details.length === 0 ? (
          <p className="p-14 text-center capitalize font-bold text-gray-500/60">
            your cart is empty
          </p>
        ) : (
          details.map((data) => (
            <ul key={data.id} className="mb-2">
              <CartItem
                thumbNail={data.thumbNail}
                amount={data.amount}
                price={data.price}
                totalamt={cartCtx.totalAmountOfItemInCart}
                onDelete={deleteHandler.bind(null, data.id)}
              />
              <Button className="hover:bg-orange-300 w-full mt-2">
                Checkout
              </Button>
            </ul>
          ))
        )}
      </motion.div>
    </>
  );
};

export default Cart;

import React from "react";

const CartContext = React.createContext({
  Items: [],
  addToCart: (item) => {},
  removeFromCart: (id) => {},
  totalAmountOfItemInCart: 0,
});

export default CartContext;

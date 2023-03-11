import React, { useReducer } from "react";
import CartContext from "./CartContext";

const CartInitialState = {
  items: [],
  totalAmountOfItemInCart: 0,
};

const reducerFunction = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const totalAmount =
      state.totalAmountOfItemInCart + action.value.price * action.value.amount;

    const existingitemindex = state.items.findIndex(
      (item) => item.id === action.value.id
    );
    const existingItem = state.items[existingitemindex];

    let updateditems;

    if (existingItem) {
      const updateditem = {
        ...existingItem,
        amount: action.value.amount + existingItem.amount,
      };
      updateditems = [...state.items];
      updateditems[existingitemindex] = updateditem;
    } else {
      updateditems = state.items.concat(action.value);
    }

    return { items: updateditems, totalAmountOfItemInCart: totalAmount };
  }

  if (action.type === "DELETE_ITEM_FROM_CART") {
    const existingitemindex = state.items.findIndex(
      (item) => item.id === action.value
    );

    const existingitem = state.items[existingitemindex];
    const updateAmount = state.totalAmountOfItemInCart - existingitem.amount;
    let updateditems;
    if (existingitem.amount === 1) {
      updateditems = state.items.filter((item) => item.id !== action.value);
    } else {
      const updateditem = {
        ...existingitem,
        amount: existingitem.amount - 1,
      };
      updateditems = [...state.items];
      updateditems[existingitemindex] = updateditem;
    }

    return { items: updateditems, totalAmountOfItemInCart: updateAmount };
  }

  return CartInitialState;
};

const ContextProvider = (props) => {
  const [CartState, DispatchAction] = useReducer(
    reducerFunction,
    CartInitialState
  );

  const addToCart = (item) => {
    DispatchAction({ type: "ADD_TO_CART", value: item });
  };
  const removeFromCart = (id) => {
    DispatchAction({ type: "DELETE_ITEM_FROM_CART", value: id });
  };

  const { children } = props;

  const cartContextvalue = {
    Items: CartState.items,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    totalAmountOfItemInCart: CartState.totalAmountOfItemInCart,
  };
  return (
    <>
      <CartContext.Provider value={cartContextvalue}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default ContextProvider;

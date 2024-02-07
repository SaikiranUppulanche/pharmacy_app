import React, { useState } from "react";

export const CartContext = React.createContext({
  cartItem: [],
  onAddToCart: () => {},
  onDeleteFromCart: () => {},
});

const CartContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);

  const handleAddToCart = (medicine) => {
    const itemIndex = cartItem.findIndex((item) => item.id === medicine.id);

    if (itemIndex === -1) {
      const newCartItem = {
        ...medicine,
        quantity: "1",
      };

      setCartItem((prev) => [...prev, newCartItem]);
    } else {
      const currentItem = { ...cartItem[itemIndex] };
      const updatedItem = {
        ...currentItem,
        quantity: parseInt(currentItem.quantity) + 1,
      };
      const newCartItem = [...cartItem];
      newCartItem[itemIndex] = updatedItem;
      setCartItem(newCartItem);
    }
  };

  const handleDeleteCartItem = (id) => {
    const updatedList = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedList);
  };
  return (
    <CartContext.Provider
      value={{
        cartItem,
        onAddToCart: handleAddToCart,
        onDeleteFromCart: handleDeleteCartItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

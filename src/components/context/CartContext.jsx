import React, { useEffect, useState } from "react";

export const CartContext = React.createContext({
  cartItem: [],
  onAddToCart: () => {},
  onDeleteFromCart: () => {},
});

const CartContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    fetch(
      "https://react-auth-3257e-default-rtdb.firebaseio.com/pharmacy/cart.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const medicinesArr = [];
        for (const key in data) {
          const medicine = data[key];

          medicinesArr.push(medicine);
        }

        setCartItem(medicinesArr);
      });
  }, []);

  const handleAddToCart = (medicine) => {
    const itemIndex = cartItem.findIndex((item) => {
      console.log(item.medicineId, medicine.id);
      return item.medicineId == medicine.id;
    });

    console.log(itemIndex);

    if (itemIndex === -1) {
      const newCartItem = {
        ...medicine,
        quantity: "1",
        medicineId: medicine.id,
      };
      fetch(
        `https://react-auth-3257e-default-rtdb.firebaseio.com/pharmacy/cart.json`,
        {
          method: "POST",
          body: JSON.stringify(newCartItem),
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setCartItem((prev) => [...prev, { ...newCartItem, id: data.name }]);
        });
    } else {
      const currentItem = { ...cartItem[itemIndex] };
      const updatedItem = {
        ...currentItem,
        quantity: parseInt(currentItem.quantity) + 1,
      };
      const newCartItem = [...cartItem];
      newCartItem[itemIndex] = updatedItem;

      console.log(newCartItem, updatedItem);

      fetch(
        `https://react-auth-3257e-default-rtdb.firebaseio.com/pharmacy/cart/${updatedItem.id}.json/`,
        {
          method: "PUT",
          body: JSON.stringify(updatedItem),
          headers: { "Content-Type": "application/json" },
        }
      ).then(() => {
        setCartItem(newCartItem);
      });
    }
  };

  const handleDeleteCartItem = (id) => {
    const updatedList = cartItem.filter((item) => item.id !== id);
    fetch(
      `https://react-auth-3257e-default-rtdb.firebaseio.com/pharmacy/cart/${id}.json/`,
      {
        method: "DELETE",
      }
    ).then(() => {
      setCartItem(updatedList);
    });
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

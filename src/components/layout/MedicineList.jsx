import React, { useContext, useState } from "react";
import Button from "../UI/Button.jsx";
import { CartContext } from "../context/CartContext.jsx";

const MedicineList = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCart = (item) => {
    console.log(item);

    cartCtx.onAddToCart(item);
  };
  return (
    <ul className="w-auto mx-20 py-8 px-8 mt-5 bg-orange-500 rounded-2xl ">
      <li className="flex flex-row mb-4 border-b-2  text-white rounded-md">
        <span className="basis-80 text-center text-2xl font-bold font-mono my-1 ">
          Medicine Name
        </span>
        <span className="basis-80 text-center text-2xl font-bold font-mono my-1 ">
          Description
        </span>
        <span className="basis-40 text-center text-2xl font-bold font-mono my-1 ">
          Price
        </span>
        <span className="basis-40 text-center text-2xl font-bold font-mono my-1 ">
          Quantity
        </span>
        <span className="basis-80 text-center text-2xl font-bold font-mono my-1 ">
          Buy
        </span>
      </li>
      {props.medicines.map((medicine) => (
        <li
          key={medicine.id}
          className="flex flex-row py-2 my-2 bg-cyan-500 rounded-md"
        >
          <span className="basis-80 text-center text-2xl font-bold font-mono my-1 ">
            {medicine.medicineName}
          </span>
          <span className="basis-80 text-center text-2xl font-bold font-mono my-1 ">
            {medicine.medicineDescription}
          </span>
          <span className="basis-40 text-center text-2xl font-bold font-mono my-1 ">
            {`${medicine.medicinePrice}`}
          </span>
          <span className="basis-40 text-center text-2xl font-bold font-mono my-1 ">
            1
          </span>
          <span className="basis-80 text-center ">
            <Button
              onClick={() => addToCart(medicine)}
              className="px-2 py-1 my-1 mx-3 text-xl text-amber-200 rounded-md bg-emerald-900 "
            >
              Add To Cart
            </Button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default MedicineList;

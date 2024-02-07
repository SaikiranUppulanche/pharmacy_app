import React from "react";
import CartButton from "../cart/CartButton";

const Header = (props) => {
  return (
    <div className="flex flex-row text-4xl text-yellow-400 w-full bg-black py-10 px-32 justify-between">
      <div className="">
        <h1>Pharmacy</h1>
      </div>
      <div className="">
        <CartButton onClick={props.onShowCart} />
      </div>
    </div>
  );
};

export default Header;

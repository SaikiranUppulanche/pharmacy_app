import React from "react";
import CartButton from "../cart/CartButton";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="flex flex-row text-4xl text-yellow-400 w-full bg-black py-10 px-32 justify-between">
      <Link to="/">
        <h1>Pharmacy</h1>
      </Link>
      <Link to="/medicines">
        <h1>Medicines</h1>
      </Link>
      <Link to="/cart">
        <CartButton onClick={props.onShowCart} />
      </Link>
    </div>
  );
};

export default Header;

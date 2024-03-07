import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

const RootLayout = ({ onShowCart }) => {
  return (
    <>
      <Header onShowCart={onShowCart} />
      <Outlet />
    </>
  );
};

export default RootLayout;

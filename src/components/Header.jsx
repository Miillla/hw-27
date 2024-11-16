import React from "react";
import Navigation from "./Navigation";
import logo from "../icon.png";

export default function Header() {
  return (
    <div className="d-flex  p-3  bg-success  mb-3">
      <div className="p-2 ">
        <img src={logo} width="30px" height="30px" alt="icon.png" />
      </div>

      <Navigation />
    </div>
  );
}

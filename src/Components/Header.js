import React from "react";
import "../Styles/Header.css";
import GradientButton from "./GradientButton";
import headerimage from "../Assets/ticketsskew.png";
import polygon from "../Assets/polygon.png";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>Tokenize your ticketing experience.</h1>
        <p>
          Metapass allows you to create events on Polygon and sell NFT tickets
          so you can token gate your event and also server proof of attendance.
        </p>
        <GradientButton>Mint now</GradientButton>
      </div>
      <div className="header-image">
        <img src={headerimage} alt="" />
      </div>
      <div className="backed">
        <h1>Backed By</h1>
        <img src={polygon} alt="polygon" />
        <span>Polygon</span>
      </div>
    </header>
  );
};

export default Header;

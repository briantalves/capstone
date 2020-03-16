import React from "react";
import Logo from "../assets/logo/QRcard.png";

export default function Home() {
  return (
    <div className="home__all">
      <img className="card__logo" height="50px" alt="Homepagepic" src={Logo} />
    </div>
  );
}

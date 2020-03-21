import React from "react";
import Logo from "../assets/logo/QRcard.png";

export default function Home() {
  return (
    <div className="home__all">
      <div className="home__pic">
        <img className="card__logo" alt="Homepagepic" src={Logo} />
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import React from "react";
import Logo from "../assets/logo/QRcard.png";
const QRCode = require("qrcode.react");

export default function Example(props) {
  console.log(props);
  return (
    <>
      <div className="brian__header">
        <div className="brian__headertitle">Business Card</div>
      </div>
      <div className="card__all">
        <div className="card__card">
          <div className="card__logoo">
            <img
              className="card__logo"
              height="50px"
              alt="Headerpic"
              src={Logo}
            />
          </div>
          <div className="card__tqr">
            <div className="card__text">
              <div className="card__name">Brian Alves</div>
              <div className="card__phone">778-855-1091</div>
              <div className="card__jobtitle">Web Developer</div>
            </div>
            <div className="card__qrcode">
              <Link to="/example">
                <QRCode
                  renderAs={"svg"}
                  height="95"
                  value="https://localhost3000/example"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

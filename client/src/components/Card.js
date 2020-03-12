import React from "react";
import Logo from "../assets/logo/QRcard.png";
const QRCode = require("qrcode.react");

export default function Example() {
  return (
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
            <div className="card__name">NAME</div>
            <div className="card__phone">PHONE</div>
            <div className="card__jobtitle">JOB TITLE</div>
          </div>
          <div className="card__qrcode">
            <QRCode
              renderAs={"svg"}
              height="95"
              value="https://www.futbin.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

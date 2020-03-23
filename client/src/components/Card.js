import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import Logo from "../assets/logo/QRcard.png";
const QRCode = require("qrcode.react");

export default function Card(props) {
  console.log(props);
  return (
    <>
      <div className="card__header">
        <div className="card__headertitle">Business Card</div>
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
              <div className="card__name">{props.newMember.name}</div>
              <div className="card__phone">{props.newMember.phone}</div>
              <div className="card__jobtitle">{props.newMember.profession}</div>
            </div>
            <div className="card__qrcode">
              <Link to="/buttons">
                <QRCode
                  renderAs={"svg"}
                  props={props}
                  height="95"
                  value="https://www.futbin.com/"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

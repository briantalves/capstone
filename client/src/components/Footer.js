import React from "react";
import Add from "../assets/icons/add.png";
import Qr from "../assets/icons/qr.png";
import Home from "../components/Home";
import Example from "../assets/icons/example.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <>
      <div className="footer__all">
        <div className="footer__container">
          <div className="footer__cn">
            <Link to="/createnew">
              <img className="footer__icon" alt="addpic" src={Add} />
            </Link>
          </div>
          <div className="footer__home">
            <Link to="/home">
              <img className="footer__icon" alt="qrpic" src={Qr} />
            </Link>
          </div>
          <div className="footer__example">
            <Link to="/examplecard">
              <img className="footer__icon" alt="examplepic" src={Example} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

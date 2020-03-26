import React from "react";
import Add from "../assets/icons/user.png";
import Home from "../assets/icons/home.png";
import Example from "../assets/icons/gallery.png";
import { Link } from "react-router-dom";

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
              <img className="footer__icon" alt="homepic" src={Home} />
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

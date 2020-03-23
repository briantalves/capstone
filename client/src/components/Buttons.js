import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Li from "../assets/icons/linkedin.png";
import Gh from "../assets/icons/github.png";
import Job from "../assets/icons/job.png";
import Cv from "../assets/icons/cv.png";
export default function Buttons(props) {
  console.log(props);
  return (
    <>
      <div className="buttons__header">
        <div className="buttons__headertitle">Personalization</div>
      </div>
      <div className="buttons__all">
        <div className="buttons__both">
          <div className="buttons__one">
            <div className="buttons__pics">
              <a href={props.newInfo.linkedin}>
                <img className="buttons__icon" alt="lipic" src={Li} />
              </a>
            </div>
            <div className="buttons__pics">
              <a href="https://github.com/briantalves/">
                <img className="buttons__icon" alt="ghpic" src={Gh} />
              </a>
            </div>
          </div>
          <div className="buttons__titles">
            <div className="buttons__title1">LinkedIn</div>
            <div className="buttons__title1">Git Hub</div>
          </div>
          <div className="buttons__two">
            <div className="buttons__pics">
              <img className="buttons__icon" alt="jobpic" src={Job} />
            </div>
            <div className="buttons__pics">
              <Link to="/resume">
                <img className="buttons__icon" alt="cvpic" src={Cv} />
              </Link>
            </div>
          </div>
          <div className="buttons__titles">
            <div className="buttons__title2">Job Posting</div>
            <div className="buttons__title2">Resume</div>
          </div>
        </div>
      </div>
    </>
  );
}

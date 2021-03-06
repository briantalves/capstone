import React from "react";
import { Link } from "react-router-dom";
import Li from "../assets/icons/linkedin.png";
import Gh from "../assets/icons/github.png";
import Job from "../assets/icons/job.png";
import Cv from "../assets/icons/cv.png";

export default function Example(props) {
  return (
    <>
      <div className="example__header">
        <div className="example__headertitle">Personalization</div>
      </div>
      <div className="example__all">
        <div className="example__both">
          <div className="example__one">
            <div className="example__pics">
              <a href="https://www.linkedin.com/in/briantalves/">
                <img className="example__icon" alt="lipic" src={Li} />
              </a>
            </div>
            <div className="example__pics">
              <a href="https://github.com/briantalves/">
                <img className="example__icon" alt="ghpic" src={Gh} />
              </a>
            </div>
          </div>
          <div className="example__titles">
            <div className="example__title1">LinkedIn</div>
            <div className="example__title1">Git Hub</div>
          </div>
          <div className="example__two">
            <div className="example__pics">
              <a href="https://www.bcjobs.ca/jobs/web-developer-1-burnaby-907141?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic">
                <img className="example__icon" alt="jobpic" src={Job} />
              </a>
            </div>
            <div className="example__pics">
              <Link to="/resume">
                <img className="example__icon" alt="cvpic" src={Cv} />
              </Link>
            </div>
          </div>
          <div className="example__titles">
            <div className="example__title2">Job Posting</div>
            <div className="example__title2">Resume</div>
          </div>
        </div>
      </div>
    </>
  );
}

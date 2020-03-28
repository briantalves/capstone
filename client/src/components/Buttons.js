import React, { Component } from "react";
import { Link } from "react-router-dom";
import Li from "../assets/icons/linkedin.png";
import Gh from "../assets/icons/github.png";
import Job from "../assets/icons/job.png";
import Cv from "../assets/icons/cv.png";
import Axios from "axios";
export default class Buttons extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      linkedin: "",
      github: "",
      jobpost: "",
      name: ""
    };
  }


  componentDidMount() {
    Axios.get("http://localhost:5500/api/contact/").then(res => {
      console.log(res.data);
      this.setState({
        linkedin: res.data.linkedin,
        github: res.data.github,
        jobpost: res.data.jobpost,
        name: res.data.name
      });
    });
  }

  handleClick = (event, url) => {
    window.location.assign(url ? url : "");
  };

  render() {
    console.log(this.props)
    return (
      <>
        <div className="buttons__header">
          <div className="buttons__headertitle">{this.state.name ? this.state.name : ""}</div>
        </div>
        <div className="buttons__all">
          <div className="buttons__both">
            <div className="buttons__one">
              <div className="buttons__pics">
                <div
                  onClick={event =>
                    this.handleClick(
                      event,
                      this.state.linkedin ? this.state.linkedin : ""
                    )
                  }
                >
                  <img className="buttons__icon" alt="lipic" src={Li} />
                </div>
              </div>
              <div className="buttons__pics">
                <div
                  onClick={event =>
                    this.handleClick(
                      event,
                      this.state.github ? this.state.github : ""
                    )
                  }
                >
                  <img className="buttons__icon" alt="ghpic" src={Gh} />
                </div>
              </div>
            </div>
            <div className="buttons__titles">
              <div className="buttons__title1">LinkedIn</div>
              <div className="buttons__title1">Git Hub</div>
            </div>
            <div className="buttons__two">
              <div className="buttons__pics">
                <div
                  onClick={event =>
                    this.handleClick(
                      event,
                      this.state.jobpost ? this.state.jobpost : ""
                    )
                  }
                >
                  <img className="buttons__icon" alt="jobpic" src={Job} />
                </div>
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
}

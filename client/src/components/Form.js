import React from "react";
import axios from "axios";
export default class Createnew extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="form__header">
          <div className="form__headertitle">Information</div>
        </div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form__all">
            <div className="form__name">
              <p className="form__titles">Name</p>
              <textarea
                className="form__textbox"
                placeholder="Insert Full Name"
                name="name"
              ></textarea>
            </div>
            <div className="form__phone">
              <p className="form__titles">Enter a phone number:</p>
              <input
                className="form__input"
                type="tel"
                id="phone"
                name="phone"
                placeholder="123-456-7890"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{5}"
                // required
              />
              <p className="form__number">Format: XXX-XXX-XXXX</p>
            </div>
            <div className="form__email">
              <p className="form__titles">Enter your email:</p>
              <input
                className="form__input"
                type="email"
                id="email"
                name="email"
                placeholder="me@example.com"
              />
            </div>
            <div className="form__profession">
              <p className="form__titles">Profession</p>
              <textarea
                className="form__textbox"
                placeholder="Insert Profession"
                name="profession"
              ></textarea>
            </div>
            <div className="form__linkedIn">
              <p className="form__titles">LinkedIn URL</p>
              <input
                className="form__input"
                type="url"
                id="linkedIn"
                name="linkedin"
              />
            </div>
            <div className="form__github">
              <p className="form__titles">Git Hub URL</p>
              <input
                className="form__input"
                type="url"
                id="gitHub"
                name="github"
              />
            </div>
          </div>
          <div className="form__generate">
            <button className="form__button">
              <span>GENERATE</span>
            </button>
          </div>
        </form>
      </>
    );
  }
}

import React from "react";

export default class Createnew extends React.Component {
  render() {
    return (
      <form onSubmit={this.submitHandler}>
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
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{5}"
              required
            />
            <br />
            <small>Format: XXX-XXX-XXXX</small>
          </div>
          <div className="form__email">
            <p className="form__titles">Enter your email:</p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="me@example.com"
            />
          </div>
          <div className="form__professioj">
            <p className="form__titles">Profession</p>
            <textarea
              className="form__textbox"
              placeholder="Insert Profession"
              name="profession"
            ></textarea>
          </div>
          <div className="form__linkedIn">
            <p className="form__titles">LinkedIn URL</p>
            <input type="url" id="linkedIn" name="linkedin" />
          </div>
          <div className="form__github">
            <p className="form__titles">Git Hub URL</p>
            <input type="url" id="gitHub" name="github" />
          </div>
        </div>
        <div className="form__generate">
          <button>
            <span>GENERATE</span>
          </button>
        </div>
      </form>
    );
  }
}

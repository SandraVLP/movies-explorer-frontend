import React from "react";
import { Link } from "react-router-dom";

class EnterForm extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <div className="enter">
          <form className="enter__form" onSubmit={this.props.onSubmit} noValidate>
            {children}
            <button
              type="submit"
              className={`enter__button ${this.props.disabled ? 'enter__button_inactive' : ''}`}
              disabled={this.props.disabled}
            >
              {this.props.buttonText}
            </button>
          </form>
          <div className="enter__link-container">
            <p className="enter__link-title">{this.props.linkTitle}</p>
            <Link to={this.props.link} className="enter__link">
              {this.props.linkText}
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default EnterForm;

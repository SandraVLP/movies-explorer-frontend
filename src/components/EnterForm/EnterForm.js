import React from "react";
import { Link } from "react-router-dom";


class EnterForm extends React.Component {


  
    render() {
        const { children } = this.props;
      return (
        <>
          <div className="enter">
            <form className="enter__form">
                {children}
                {/* <InputForm htmlFor={'name'}               
                placeholder={"Имя"}
                id={"name"}
                name={"name"}
                type={"name" }/> */}
             {/* <div className="enter__block">  
            <label className="enter__label" htmlFor="name">Имя:</label>
              <input
                className="enter__input"
                placeholder="Имя"
                id="name"
                name="name"
                type="name"
                // value={this.state.name}
                // onChange={this.handleChange}
              />
              </div> */}
              {/* <InputForm htmlFor={'email'}               
                placeholder={"Email"}
                id={"email"}
                name={"email"}
                type={"email" }/> */}
             {/* <div className="enter__block">  
              <label className="enter__label" htmlFor="email">Email:</label>
              <input
                className="enter__input"
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                // value={this.state.email}
                // onChange={this.handleChange}
              />
                </div> */}
                              {/* <InputForm htmlFor={'password'}               
                placeholder={"Пароль"}
                id={"password"}
                name={"password"}
                type={"password" }/> */}
             {/* <div className="enter__block">  
              <label className="enter__label" htmlFor="password">Пароль:</label>
              <input
                className="enter__input"
                placeholder="Пароль"
                id="password"
                name="password"
                type="password"
                // value={this.state.password}
                // onChange={this.handleChange}
              />
                </div> */}
                <button
                  type="submit"
                //   onSubmit={this.handleSubmit}
                  className="enter__button"
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
  
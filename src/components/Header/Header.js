import logo from "../../images/logo.svg";
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function MainHeader(props) {
  return (
    <div className="header__container">
      <img className="header__logo" src={logo} alt="Логотип" />
      <button
        className="header__open-nav"
        alt="Открыть меню"
        onClick={props.openNavigation}
      ></button>
      <div className="header__navigation">
        <Navigation />
      </div>
    </div>
  );
}

function Header(props) {
  return (
    <header className="header">
      <Routes>
        <Route
          path="/"
          element={
            <div className="header__container">
              <img className="header__logo" src={logo} alt="Логотип" />
              <div className="header__navigation">
                <Link to="/signup" className="header__link">
                  {" "}
                  Регистрация
                </Link>
                <button className="header__button">Войти</button>
              </div>
            </div>
          }
        />
        {["/movies", "/saved-movies", "/profile"].map((path) => (
          <Route
            path={path}
            element={<MainHeader openNavigation={props.openNavigation} />}
          />
        ))}
        <Route
          path="/signup"
          element={
            <div className="header__container_enter">
              <img className="header__logo" src={logo} alt="Логотип" />
              <h1 className="header__title">Добро пожаловать!</h1>
            </div>
          }
        />
        <Route
          path="/signin"
          element={
            <div className="header__container_enter">
              <img className="header__logo" src={logo} alt="Логотип" />
              <h1 className="header__title">Рады видеть!</h1>
            </div>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;

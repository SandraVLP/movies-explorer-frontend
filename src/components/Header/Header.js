import logo from "../../images/logo.svg";
import acc from "../../images/acc1.svg"
import React from "react";
import { Link, Routes, Route } from "react-router-dom";


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
              <Link to="/signup" className="header__link"> Регистрация</Link>
              <button className="header__button">
                Войти
              </button>
              </div>
            </div>
          }
          />
                <Route
          path="/movies"
          element={
            <div className="header__container">
            <img className="header__logo" src={logo} alt="Логотип" />
            <div className="header__navigation">
              <Link to="/movies" className="header__link"> Фильмы</Link>
              <Link to="/saved-movies" className="header__link"> Сохраненные фильмы</Link>
              </div>
              <Link to="/profile" className="header__link_profile"> Аккаунт <img className="header__profile-img" src={acc} alt="аккаунт"></img></Link>
            </div>
          }
          />
          <Route
          path="/saved-movies"
          element={
            <div className="header__container">
            <img className="header__logo" src={logo} alt="Логотип" />
            <div className="header__navigation">
              <Link to="/movies" className="header__link"> Фильмы</Link>
              <Link to="/saved-movies" className="header__link"> Сохраненные фильмы</Link>
              </div>
              <Link to="/profile" className="header__link_profile"> Аккаунт <img className="header__profile-img" src={acc} alt="аккаунт"></img></Link>
            </div>
          }
          />
          <Route
          path="/profile"
          element={
            <div className="header__container">
            <img className="header__logo" src={logo} alt="Логотип" />
            <div className="header__navigation">
              <Link to="/movies" className="header__link"> Фильмы</Link>
              <Link to="/saved-movies" className="header__link"> Сохраненные фильмы</Link>
              </div>
              <Link to="/profile" className="header__link_profile"> Аккаунт <img className="header__profile-img" src={acc} alt="аккаунт"></img></Link>
            </div>
          }
          />
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
import logo from "../../images/logo.svg";
import logo1 from "../../images/logo1.svg";
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MainHeader(props) {


  return (
    <div className="header__container">
      <Link to="/"><img className="header__logo" src={logo1} alt="Логотип" /> </Link>
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
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <header className="header">
      <Routes>
        <Route
          path="*"
          element={currentUser ?
<MainHeader openNavigation={props.openNavigation} />
:

            <div className="header__container">
              <img className="header__logo" src={logo} alt="Логотип" />
              <div className="header__navigation-main">
                <Link to="/signup" className="header__link">
                  {" "}
                  Регистрация
                </Link>
                <Link to="signin"><button className="header__button">Войти</button> </Link>
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
            <div className="header__container-enter">
               <Link to="/"><img className="header__logo" src={logo1} alt="Логотип" /> </Link>
              <h1 className="header__title">Добро пожаловать!</h1>
            </div>
          }
        />
        <Route
          path="/signin"
          element={
            <div className="header__container-enter">
              <Link to="/"><img className="header__logo" src={logo1} alt="Логотип" /> </Link>
              <h1 className="header__title">Рады видеть!</h1>
            </div>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;

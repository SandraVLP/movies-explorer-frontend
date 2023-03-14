import { Link } from "react-router-dom";
import acc from "../../images/acc1.svg";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__container">
        <Link to="/" className="navigation__link">
          Главная
        </Link>
        <Link to="/movies" className="navigation__link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navigation__link">
          Сохраненные фильмы
        </Link>
      </div>
      <div className="navigation__profile">
        <Link to="/profile" className="navigation__link_profile">
          {" "}
          Аккаунт{" "}
          <img
            className="navigation__profile-img"
            src={acc}
            alt="аккаунт"
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;

import spiral from "../../images/header-image.svg";

import spiralSmall from "../../images/spiral-min.svg";

function FirstSlide(props) {
  return (
    <div className="slide">
      <div className="slide__container">
        <h1 className="slide__text">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img className="slide__spiral" src={spiral} alt="Спираль"></img>
        <img
          className="slide__spiral-small"
          src={spiralSmall}
          alt="Спираль"
        ></img>
      </div>
    </div>
  );
}

export default FirstSlide;

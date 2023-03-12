import spiral from "../../images/header-image.svg";

function FirstSlide(props) {

    return (
      <div className="slide">
        <div className="slide__container">
          <h1 className="slide__text">Учебный проект студента факультета Веб-разработки.</h1>
          <img className="spiral" src={spiral} alt="Спираль"></img>
          </div>
      </div>
    );
  }
  
  export default FirstSlide;
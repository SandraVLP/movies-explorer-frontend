import foto from "../../images/foto.png";
import arrow from "../../images/arrow.svg"

function AboutMe(props) {
  return (
    <div className="about">
      <div className="about__container">
      <h2 className="about__title">Студент</h2>
      <div className="about__block">
      <div className="about__info">
        <h2 className="about__info_title">Виталий</h2>
        <p className="about__info_subtitle">Фронтенд-разработчик, 30 лет</p>
        <p className="about__info_text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a className="about__info_link" href="https://github.com/">
          github
        </a>
      </div>
      <img className="about__foto" src={foto} alt="Фото студента"></img>
      </div>
      <h3 className="about__portfolio-title">Портфолио </h3>
      <ul className="about__portfolio">
        <li className="about__portfolio-link"><a className="about__link" src="#" alt="Статичный сайт">Статичный сайт</a> 
        <img className="about__img" src={arrow} alt="ссылка"></img>
        </li>
        <li className="about__portfolio-link"> <a className="about__link" src="#" alt="Статичный сайт">Адаптивный сайт</a><img className="about__img" src={arrow} alt="ссылка"></img></li>
        <li className="about__portfolio-link"> <a className="about__link" src="#" alt="Статичный сайт">Одностраничное приложение</a><img className="about__img" src={arrow} alt="ссылка"></img></li>
        </ul> 
        </div> 
    </div>
  );
}

export default AboutMe;

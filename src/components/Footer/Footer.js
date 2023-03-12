import { Link, Routes, Route } from "react-router-dom";

function Footer(props) {

    return (
        <Routes>
      <Route
          path="/"
          element={
        <div className="footer">
            <div className="footer__container">   
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__nav">
            <p className="footer__date">©2023</p>
            <div className="footer__links">
            <a className="footer__link" href="https://practicum.yandex.ru/" alt="Яндекс Практикум">Яндекс.Практикум</a>
            <a className="footer__link" href="https://github.com/" alt="Гит">Github</a>
            </div>
            </div>    
            </div> 
    </div>
              }
              />
                    <Route
          path="/movies"
          element={
        <div className="footer">
            <div className="footer__container">   
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__nav">
            <p className="footer__date">©2023</p>
            <div className="footer__links">
            <a className="footer__link" href="https://practicum.yandex.ru/" alt="Яндекс Практикум">Яндекс.Практикум</a>
            <a className="footer__link" href="https://github.com/" alt="Гит">Github</a>
            </div>
            </div>    
            </div> 
    </div>
              }
              />
                    <Route
          path="/saved-movies"
          element={
        <div className="footer">
            <div className="footer__container">   
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__nav">
            <p className="footer__date">©2023</p>
            <div className="footer__links">
            <a className="footer__link" href="https://practicum.yandex.ru/" alt="Яндекс Практикум">Яндекс.Практикум</a>
            <a className="footer__link" href="https://github.com/" alt="Гит">Github</a>
            </div>
            </div>    
            </div> 
    </div>
              }
              />
    </Routes>
    );
  }
   
  export default Footer;
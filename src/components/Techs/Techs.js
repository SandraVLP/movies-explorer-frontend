function Techs(props) {
  return (
    <div className="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>

        <div className="techs__about">
          <h2 className="techs__about-title">7 технологий</h2>
          <p className="techs__about-text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__methods">
          <li className="techs__methods-block">HTML</li>
          <li className="techs__methods-block">CSS</li>
          <li className="techs__methods-block">JS</li>
          <li className="techs__methods-block">React</li>
          <li className="techs__methods-block">Git</li>
          <li className="techs__methods-block">Express.js</li>
          <li className="techs__methods-block">mongoDB</li>
        </ul>
      </div>
    </div>
  );
}

export default Techs;

function Promo(props) {
  return (
    <div className="promo">
      <h2 className="promo__title">О проекте</h2>
      <div className="promo__text">
        <div className="promo__about">
          <h2 className="promo__about-title">
            Дипломный проект включал 5 этапов
          </h2>
          <p className="promo__about-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="promo__about">
          <h2 className="promo__about-title">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="promo__about-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="promo__period">
        <p className="promo__period-date">1 неделя</p>
        <p className="promo__period-date">4 недели</p>
        <p className="promo__period-text">Back-end</p>
        <p className="promo__period-text">Front-end</p>
      </div>
    </div>
  );
}

export default Promo;

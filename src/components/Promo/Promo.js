function Promo(props) {

    return (
        <div className="promo">
        <h2 className="promo__title">О проекте</h2>
        <div className="promo__text">
            <div className="promo__about">
                <h2 className="promo__about_title">Дипломный проект включал 5 этапов</h2>
                <p className="promo__about_text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
            <div className="promo__about">
            <h2 className="promo__about_title">На выполнение диплома ушло 5 недель</h2>
                <p className="promo__about_text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
        </div>
            <div className="promo__period">
                <p className="promo__period_date">1 неделя</p>
                <p className="promo__period_date">4 недели</p>
                <p className="promo__period_text">Back-end</p>
                <p className="promo__period_text">Front-end</p>
            </div>

    </div>
    );
  }
  
  export default Promo;
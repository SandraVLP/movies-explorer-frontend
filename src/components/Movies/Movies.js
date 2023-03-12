import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import film1 from "../../images/film1.png";
import film2 from "../../images/film2.png";
import film3 from "../../images/film3.png";
import film4 from "../../images/film4.png";
import film5 from "../../images/film5.png";
import film6 from "../../images/film6.png";
import film7 from "../../images/film7.png";
import film8 from "../../images/film8.png";
import film9 from "../../images/film9.png";
import film10 from "../../images/film10.png";
import film11 from "../../images/film11.png";
import film12 from "../../images/film12.png";

function Movies(props) {
  const cardsList = [
    {
      src: film1,
      cardName: "33 слова о дизайне",
      cardDuration: "1ч 17м",
      isSaved: false,
    },
    {
      src: film2,
      cardName: "Киноальманах «100 лет дизайна»",
      cardDuration: "1ч 17м",
      isSaved: false,
    },
    {
      src: film3,
      cardName: "В погоне за Бенкси",
      cardDuration: "1ч 17м",
      isSaved: false,
    },
    {
      src: film4,
      cardName: "Баския: Взрыв реальности",
      cardDuration: "1ч 17м",
      isSaved: false,
    },
    {
      src: film5,
      cardName: "Бег это свобода",
      cardDuration: "1ч 17м",
      isSaved: false,
    },
    {
      src: film6,
      cardName: "Книготорговцы",
      cardDuration: "1ч 17м",
      isSaved: false,
    },
    {
      src: film7,
      cardName: "Когда я думаю о Германии ночью",
      cardDuration: "1ч 17м",
      isSaved: false,
    },
    {
      src: film8,
      cardName: "Gimme Danger: История Игги и The Stooges",
      cardDuration: "1ч 17м",
      isSaved: false,
    },
    {
      src: film9,
      cardName: "Дженис: Маленькая девочка грустит",
      cardDuration: "1ч 17м",
      isSaved: false,
    },
    {
      src: film10,
      cardName: "Соберись перед прыжком",
      cardDuration: "1ч 17м",
      isSaved: false,
    },
    {
      src: film11,
      cardName: "Пи Джей Харви: A dog called money",
      cardDuration: "1ч 17м",
      isSaved: false,
    },
    {
      src: film12,
      cardName: "По волнам: Искусство звука в кино",
      cardDuration: "1ч 17м",
      isSaved: false,
    },
  ];

  return (
    <>
      <SearchForm />
      <MoviesCardList cardList={cardsList} showAddButton={true} />
    </>
  );
}

export default Movies;

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import film1 from "../../images/film1.png";
import film2 from "../../images/film2.png";
import film3 from "../../images/film3.png";

function SavedMovies(props) {
  const cardsList = [
    {
      src: film1,
      cardName: "33 слова о дизайне",
      cardDuration: "1ч 17м",
      isSaved: true,
    },
    {
      src: film2,
      cardName: "Киноальманах «100 лет дизайна»",
      cardDuration: "1ч 17м",
      isSaved: true,
    },
    {
      src: film3,
      cardName: "В погоне за Бенкси",
      cardDuration: "1ч 17м",
      isSaved: true,
    },
  ];

  return (
    <>
      <SearchForm />
      <MoviesCardList cardList={cardsList} showAddButton={false} />
    </>
  );
}

export default SavedMovies;

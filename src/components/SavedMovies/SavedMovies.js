import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import api from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedMovies(props) {
  const [moviesList, setMoviesList] = useState([]);
  const [fullMoviesList, setfullMoviesList] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(false);
  const [onlyShorts, setOnlyShorts] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchComplete, setSearchComplete] = useState(!!searchStr.length);
  const currentUser = React.useContext(CurrentUserContext);
 
  useEffect(() => {
    if (!currentUser || isLoaded) {
      return;
    } else {
      api
        .getSavedMovies()
        .then((data) => {
          setfullMoviesList(data.data);
          setMoviesList(data.data);
          setIsLoaded(true);
        })
        .catch((err) => {
          console.log(`Ошибка; ${err}`);
        });
    }
  }, [isLoaded, currentUser]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    setError(false);
    setMoviesList([]);

        const searchStrLowerCase = searchStr.toLowerCase();
        const filteredMovies = fullMoviesList.filter((item) => {
          return (
            item.nameRU.toLowerCase().includes(searchStrLowerCase) ||
            item.nameEN.toLowerCase().includes(searchStrLowerCase) ||
            item.director.toLowerCase().includes(searchStrLowerCase) ||
            item.year.toLowerCase().includes(searchStrLowerCase) ||
            item.country.toLowerCase().includes(searchStrLowerCase) ||
            item.description.toLowerCase().includes(searchStrLowerCase)
          );
        });

        setMoviesList(filteredMovies);
        setSearchComplete(true);
  }

  function handleDelete(data) {
    api
      .deleteMovie(data._id)
      .then(() => {
        const newFullMoviesList = fullMoviesList.filter((c) => {
          return c._id !== data._id;
        });
        setfullMoviesList(newFullMoviesList);
        const newMoviesList = moviesList.filter((c) => {
          return c._id !== data._id;
        });
        setMoviesList(newMoviesList);
      })
      .catch((err) => {
        console.log(`Ошибка; ${err}`);
      });
  }

  const moviesToDisplay = onlyShorts
  ? moviesList.filter((item) => {
      return item.duration < 40;
    })
  : moviesList;

  return (
    <>
      <SearchForm
        onSubmit={handleSearchSubmit}
        searchValue={searchStr}
        onChangeSearch={(e) => setSearchStr(e.target.value)}
        shortsValue={onlyShorts}
        onChangeShorts={(e) => {
          setOnlyShorts(e.target.checked);
        }}
      />
      {isSearching && <Preloader />}
      {error && (
        <div>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </div>
      )}

      {moviesToDisplay.length ? (
        <MoviesCardList
          cardList={moviesToDisplay}
          showAddButton={false}
          onDeleteClick={handleDelete}
        />
      ) : (searchComplete &&
        <div>Ничего не найдено</div>
      )}
    </>
  );
}

export default SavedMovies;

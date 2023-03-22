import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import api from "../../utils/MainApi";

function Movies(props) {
  const [moviesObj, setMoviesObj] = useState(
    JSON.parse(localStorage.getItem("moviesObj")) || {}
  );
  const [searchStr, setSearchStr] = useState(
    localStorage.getItem("searchStr") || ""
  );
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(false);
  const [onlyShorts, setOnlyShorts] = useState(
    localStorage.getItem("onlyShorts") === "true"
  );
  const [savedMovies, setSavedMovies] = useState([]);
  const [pageLength, setPageLength] = useState(0);
  const [firstPageLenght, setFirstPageLenght] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
 

  function handleSearchSubmit(e) {
    e.preventDefault();
    setError(false);
    setMoviesObj({});
    setIsSearching(true);
    moviesApi
      .getMovies()
      .then((data) => {
        setIsSearching(false);
        const searchStrLowerCase = searchStr.toLowerCase();
        const filteredMovies = data.filter((item) => {
          return (
            item.nameRU.toLowerCase().includes(searchStrLowerCase) ||
            item.nameEN.toLowerCase().includes(searchStrLowerCase) ||
            item.director.toLowerCase().includes(searchStrLowerCase) ||
            item.year.toLowerCase().includes(searchStrLowerCase) ||
            item.country.toLowerCase().includes(searchStrLowerCase) ||
            item.description.toLowerCase().includes(searchStrLowerCase)
          );
        });
        const newMoviesObject = {};
        filteredMovies.forEach((element) => {
          newMoviesObject[element.id] = element;
        });

        console.log("filteredMovies", filteredMovies);
        api
          .getSavedMovies()
          .then((data) => {
              console.log('data', data)
              data.data.forEach((element) => {
                const movie = newMoviesObject[element.movieId];
                if (movie) {
                  newMoviesObject[element.movieId].isSaved = true;
                }
              });
            setSavedMovies(data);
            setMoviesObj(newMoviesObject);
            localStorage.setItem("moviesObj", JSON.stringify(newMoviesObject));
            localStorage.setItem("searchStr", searchStr);
          })
          .catch((err) => {
            console.log(`Ошибка; ${err}`);
          });
      })
      .catch((err) => {
        setError(true);
        setIsSearching(false);
        console.log(`Ошибка; ${err}`);
      });
  }

  const moviesList = Object.values(moviesObj);

  const moviesToDisplay = onlyShorts
    ? moviesList.filter((item) => {
        return item.duration < 40;
      })
    : moviesList;

  function handleSave(data) {
    api
      .addMovie(data)
      .then((movieData) => {
        const newMoviesObj = { ...moviesObj };
        newMoviesObj[movieData.data.movieId].isSaved = true;
        newMoviesObj[movieData.data.movieId]._id = movieData.data._id;
        setMoviesObj(newMoviesObj);
        localStorage.setItem("moviesObj", JSON.stringify(newMoviesObj));
      })
      .catch((err) => {
        console.log(`Ошибка; ${err}`);
      });
  }

  function handleDelete(data) {
    api
      .deleteMovie(data._id)
      .then(() => {
        const newMoviesObj = { ...moviesObj };
        console.log("data", data);
        newMoviesObj[data.id].isSaved = false;
        newMoviesObj[data.id]._id = null;
        setMoviesObj(newMoviesObj);
        localStorage.setItem("moviesObj", JSON.stringify(newMoviesObj));
      })
      .catch((err) => {
        console.log(`Ошибка; ${err}`);
      });
  }

  React.useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth <= 480) {
        setPageLength(2)
        setFirstPageLenght(5)
      }
      else if (window.innerWidth <= 899) {
        setPageLength(2)
        setFirstPageLenght(8)
      }
      else {
        setPageLength(3)
        setFirstPageLenght(12)
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);


  function handleMoreClick() {
    setCurrentPageNumber(currentPageNumber + 1)
  }

const displayCardLength = firstPageLenght +currentPageNumber * pageLength;

  return (
    <>
      <SearchForm
        onSubmit={handleSearchSubmit}
        searchValue={searchStr}
        onChangeSearch={(e) => setSearchStr(e.target.value)}
        shortsValue={onlyShorts}
        onChangeShorts={(e) => {
          setOnlyShorts(e.target.checked);
          localStorage.setItem("onlyShorts", e.target.checked);
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
          cardList={moviesToDisplay.slice(0, displayCardLength)}
          showAddButton={true}
          grey={true}
          onDeleteClick={handleDelete}
          onSaveClick={handleSave}
          onClickMore={handleMoreClick}
          showMoreButton={moviesToDisplay.length > displayCardLength}
        />
      ) : (
        <div>Ничего не найдено</div>
      )}
    </>
  );
}

export default Movies;

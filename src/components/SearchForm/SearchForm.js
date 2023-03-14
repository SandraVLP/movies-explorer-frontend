function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <fieldset className="search__name">
          <input
            className="search__input"
            type="search"
            id="name"
            placeholder="Фильм"
          ></input>
          <button className="search__find">Найти</button>
        </fieldset>
      </form>
      <div className="search__shorts">
        <label htmlFor="toggle-button" className="search__text">
          Короткометражки
        </label>
        <input
          type="checkbox"
          id="toggle-button"
          className="search__toggle-button"
        ></input>
      </div>
    </div>
  );
}

export default SearchForm;

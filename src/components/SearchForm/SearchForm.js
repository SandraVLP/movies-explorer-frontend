function SearchForm(props) {
  return (
    <div className="search">
      <form className="search__form" onSubmit={props.onSubmit}>
        <fieldset className="search__name">
          <input
            value={props.searchValue || ''}
            onChange={props.onChangeSearch}
            className="search__input"
            type="search"
            id="name"
            placeholder="Фильм"
            name="search"
            required
          ></input>
          <button type="submit" className="search__find">
            Найти
          </button>
        </fieldset>
      </form>
      <div className="search__shorts">
        <label htmlFor="toggle-button" className="search__text">
          Короткометражки
        </label>
        <input
          checked={props.shortsValue}
          onChange={props.onChangeShorts}
          name="shorts"
          type="checkbox"
          id="toggle-button"
          className="search__toggle-button"
        ></input>
      </div>
    </div>
  );
}

export default SearchForm;

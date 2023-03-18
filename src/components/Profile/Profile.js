function Profile() {
  return (
    <div className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <fieldset className="profile__fieldset">
          <label className="profile__label">Имя:</label>
          <input
            className="profile__input"
            placeholder="Имя"
            id="name"
            name="name"
            type="name"
            required
          ></input>
        </fieldset>
        <fieldset className="profile__fieldset">
          <label className="profile__label">E-mail:</label>
          <input
            className="profile__input"
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            required
          ></input>
        </fieldset>
        <button className="profile__button profile__edit">Редактировать</button>
        <button className="profile__button profile__exit">
          Выйти из аккаунта
        </button>
      </form>
    </div>
  );
}

export default Profile;

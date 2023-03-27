import React, {useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../Validation/Validation";


function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [submitAllowed, setSubmitAllowed] = useState(false);

  const { values, setValues, handleChange, errors, isValid, handleEmailChange } = useFormWithValidation();
  React.useEffect(() => {
    setValues({name: currentUser?.name, email: currentUser?.email})
  }, [currentUser, setValues]);

  React.useEffect(() => {
    setSubmitAllowed(values.name !== currentUser?.name || values.email !== currentUser?.email)
  },[values, setSubmitAllowed, currentUser])
  
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(
values
    );
  }


  return (
    <div className="profile">
      <h1 className="profile__title">Привет, {currentUser?.name}!</h1>
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
        <fieldset className="profile__fieldset">
          <label className="profile__label">Имя:</label>
          <input
            className="profile__input"
            placeholder="Имя"
            id="name"
            name="name"
            type="name"
            value={values.name || ""}
            onChange={handleChange}
            required
          ></input>
        </fieldset>
        <span className="profile__errors">{errors.name}</span>
        <fieldset className="profile__fieldset">
          <label className="profile__label">E-mail:</label>
          <input
            className="profile__input"
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            value={values.email || ""}
            onChange={handleEmailChange}
            required
          ></input>
          
        </fieldset>
        <span className="profile__errors">{errors.email}</span>
        <span className="profile__success">{props.successText}</span>
        <button className="profile__button profile__edit" type="submit" disabled={!submitAllowed || !isValid}>Редактировать</button>
        <button className="profile__button profile__exit" onClick={props.signOut}>
          Выйти из аккаунта
        </button>
      </form>
    </div>
  );
  }


export default Profile;

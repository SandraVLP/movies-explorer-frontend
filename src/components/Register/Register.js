import React from "react";
import EnterForm from "../EnterForm/EnterForm";
import FormInput from "../FormInput/FormInput";
import useFormWithValidation from "../Validation/Validation";

function Register(props) {
  const { values, handleChange, errors, isValid, handleEmailChange } = useFormWithValidation();

 
  function handleSubmit (e) {
    e.preventDefault();
    // здесь обработчик регистрации
    props.onRegister(values.password, values.email, values.name);
  };
  
    return (
      <div className="register">
        <EnterForm
          onSubmit={handleSubmit}
          buttonText={"Зарегистрироваться"}
          link={"/signin"}
          linkText={"Войти"}
          linkTitle={"Уже зарегистрированы?"}
          disabled={!isValid}
        >
          <FormInput
            value={values.name}
            onChange={handleChange}
            spanText={errors.name}
            htmlFor={"name"}
            inputTitle={"Имя:"}
            placeholder={"Имя"}
            id={"name"}
            name={"name"}
            type={"name"}
            span={"name-error"}
            minLength={"2"}
            maxLength={"20"}
          />
          <FormInput
            value={values.email}
            onChange={handleEmailChange}
            spanText={errors.email}
            htmlFor={"email"}
            inputTitle={"Email:"}
            placeholder={"Email"}
            id={"email"}
            name={"email"}
            type={"email"}
            span={"email-error"}
            minLength={"5"}
          />
          <FormInput
            value={values.password}
            onChange={handleChange}
            spanText={errors.password}
            htmlFor={"password"}
            inputTitle={"Пароль:"}
            placeholder={"Пароль"}
            id={"password"}
            name={"password"}
            type={"password"}
            span={"password-error"}
          />
        </EnterForm>
      </div>
    );
}

export default Register;

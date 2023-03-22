import React from "react";
import EnterForm from "../EnterForm/EnterForm";
import FormInput from "../FormInput/FormInput";
import useFormWithValidation from "../Validation/Validation";

function Login (props) {

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    props.onLogin(values.email, values.password);
  }

    return (
      <div className="register">
        <EnterForm
          onSubmit={handleSubmit}
          buttonText={"Войти"}
          link={"/signup"}
          linkText={"Регистрация"}
          linkTitle={"Ещё не зарегистрированы?"}
          disabled={!isValid}
        >
          <FormInput
            value={values.email}
            onChange={handleChange}
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

export default Login;

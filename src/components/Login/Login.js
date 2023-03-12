import EnterForm from "../EnterForm/EnterForm";
import FormInput from "../FormInput/FormInput";

function Login() {
  return (
    <div className="register">
      <EnterForm buttonText={"Войти"} link={"/signup"} linkText={"Регистрация"} linkTitle={"Ещё не зарегистрированы?"} >
        <FormInput
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
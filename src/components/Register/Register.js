import EnterForm from "../EnterForm/EnterForm";
import FormInput from "../FormInput/FormInput";

function Register() {
  return (
    <div className="register">
      <EnterForm buttonText={"Зарегистрироваться"} link={"/signin"} linkText={"Войти"} linkTitle={"Уже зарегистрированы?"} >
        <FormInput
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

export default Register;

function FormInput(props) {
  return (
    <div className="enter__block">
      <label className="enter__label" htmlFor={props.htmlFor}>
        {props.inputTitle}
      </label>
      <input
        className="enter__input"
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        type={props.type}
        minLength={props.minLength}
        maxLength={props.maxLength}
        required
        value={props.value || ""}
        onChange={props.onChange}
      />
      <span id={props.span} className="enter__span">{props.spanText}</span>
    </div>
  );
}

export default FormInput;

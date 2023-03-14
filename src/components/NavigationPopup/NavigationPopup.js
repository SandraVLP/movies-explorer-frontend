import Navigation from "../Navigation/Navigation";

function NavigationPopup(props) {
  return (
    <div className={`popup${props.isOpen ? " popup_active" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={props.onClose}
        ></button>
        <Navigation />
      </div>
    </div>
  );
}

export default NavigationPopup;

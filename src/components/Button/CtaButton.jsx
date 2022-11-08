import "./CtaButton.scss";

const CtaButton = ({ text, source, clickHandler, classModifier }) => {
  let currClassName = "cta-button";
  if (classModifier !== "false") {
    currClassName = classModifier;
  }

  return (
    <button className={currClassName} type="submit" onClick={clickHandler}>
      <img
        className={`${currClassName}__icon`}
        src={source}
        alt="button icon"
      ></img>
      {text}
    </button>
  );
};

export default CtaButton;

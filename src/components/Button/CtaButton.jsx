import "./CtaButton.scss";

const CtaButton = ({
  text,
  source,
  clickHandler,
  classModifier,
  colorMode,
}) => {
  // creating vars to house the default className or inherit the className of the passed down classModifier prop
  let currClassName = "cta-button";
  if (classModifier !== "false") {
    currClassName = classModifier;
  }

  return (
    <button
      className={`${currClassName} ${colorMode}`}
      type="submit"
      onClick={(e) => {
        if (clickHandler) {
          clickHandler(e);
        }
      }}
    >
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

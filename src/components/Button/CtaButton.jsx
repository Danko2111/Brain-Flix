import "./CtaButton.scss";

const CtaButton = ({
  text,
  source,
  clickHandler,
  classModifier,
  colorMode,
}) => {
  let currClassName = "cta-button";
  if (classModifier !== "false") {
    currClassName = classModifier;
  }

  return (
    <button
      className={`${currClassName} ${colorMode}`}
      type="submit"
      onClick={(e) => {
        clickHandler(e);
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

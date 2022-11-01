import "./CtaButton.scss";

const CtaButton = (props) => {
  return (
    <button className="cta-button" type="submit">
      <img
        className="cta-button__icon"
        src={props.source}
        alt="button icon"
      ></img>
      {props.text}
    </button>
  );
};

export default CtaButton;

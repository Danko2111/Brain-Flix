import logo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./PageHeader.scss";
import CtaButton from "../Button/CtaButton";
import buttonIcon from "../../assets/Icons/upload.svg";
import { useNavigate, Link } from "react-router-dom";

const PageHeader = ({ colorMode, toggleColorMode }) => {
  // using useNavigate hook to create a func that i can pass into the button component with props.
  const nav = useNavigate();
  const navigateToUpload = (e) => {
    e.preventDefault();
    nav("/Upload");
  };

  const mode = colorMode;

  return (
    <header className={`site-header ${mode}`}>
      <div className="site-header--top">
        <Link to="/">
          <img className="site-header__logo" src={logo} alt="site logo"></img>
        </Link>
      </div>
      <div className="site-header--bottom">
        <button
          className={`site-header__toggle-mode${mode}`}
          onClick={toggleColorMode}
        >
          <div className={`site-header__toggle-mode--inner${mode}`}></div>
        </button>
        <form className="site-header__form">
          <div className="site-header__search-bar">
            <img
              className="site-header__search-bar-icon"
              src={searchIcon}
              alt="search icon"
            ></img>
            <input
              className="site-header__search-bar-input"
              name="search-bar"
              placeholder="Search"
            ></input>
          </div>
          <img
            className="site-header__avatar"
            src={avatar}
            alt="profile logo"
          ></img>
          <CtaButton
            text="upload"
            source={buttonIcon}
            clickHandler={navigateToUpload}
            classModifier="false"
          />
        </form>
      </div>
    </header>
  );
};

export default PageHeader;

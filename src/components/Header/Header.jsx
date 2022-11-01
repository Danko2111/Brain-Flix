import logo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="site-header">
      <div className="site-header--top">
        <img className="site-header__logo" src={logo} alt="site logo"></img>
      </div>
      <div className="site-header--bottom">
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
        </form>
        <img
          className="site-header__avatar"
          src={avatar}
          alt="profile logo"
        ></img>
      </div>
    </div>
  );
};

export default Header;

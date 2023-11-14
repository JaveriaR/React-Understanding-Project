import { LOGO_URL } from "../Utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div>
          <img src={LOGO_URL}
          className="logo"></img>
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>about us</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
  
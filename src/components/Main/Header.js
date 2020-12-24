import "./header.css";
import banner from "../../assets/banner.jpg";
function Header() {
  return (
    <div className="header">
      <img src={banner} alt="banner" className="banner-img"></img>
      <div className="header-bar">
        <div className="header-link">Home</div>
        <div className="header-link">Merch</div>
        <div className="merch-dropdown-content">
          <p>Shirts</p>
          <p>Pants</p>
          <p>Hats</p>
        </div>
        <div className="header-link">About</div>
        <div className="header-link">Contact</div>
      </div>
    </div>
  );
}

export default Header;

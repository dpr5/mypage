import "./main.css";
import banner from "../../assets/banner.jpg";

function Header() {
  return (
    <div className="header">
      <img src={banner} alt="banner" className="banner-img"></img>
      <div className="header-bar"></div>
    </div>
  );
}

function Footer() {
  return <div className="footer">footer</div>;
}

function Content() {
  return (
    <div className="content">
      <div className="banner1">Banner 1</div>
      <div className="content-main">content main</div>
      <div className="banner2">Banner 2</div>
    </div>
  );
}
function Main() {
  return (
    <div className="main">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Main;

import "./main.css";
import Header from "./Header";
import Footer from "./Footer";

function Box() {
  return <div className="content-box"></div>;
}
function Content() {
  return (
    <div className="content">
      <div className="banner1">Banner 1</div>
      <div className="content-main">
        <Box />
        <Box />
        <Box />
      </div>
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

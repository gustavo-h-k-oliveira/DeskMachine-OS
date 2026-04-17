import "./WebBrowser.css";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";

export default function Contato() {
  return (
    <div className="frame">
      <Menu link="http://gustavo.oliveira.com/contact/"/>
      <div className="contato-content">
        Web Browser
      </div>
      <Footer />
    </div>
  );
}

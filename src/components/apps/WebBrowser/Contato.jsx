import "./WebBrowser.css";
import "./Contato.css";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";

export default function Contato() {
  return (
    <div className="frame">
      <Menu link="http://gustavo.oliveira.com/contact/"/>
      <div className="contato-content">
        <h1>Contatos</h1>
        <p><strong>WhatsApp</strong>: <a href="https://wa.me/5514981704947">(14) 98170-4947</a></p>
        <p><strong>LinkedIn</strong>: <a href="https://www.linkedin.com/in/gustavo-oliveira-713583214/">gustavo-oliveira</a></p>
        <p><strong>GitHub</strong>: <a href="https://github.com/gustavo-h-k-oliveira">gustavo-h-k-oliveira</a></p>
        <p><strong>E-mail</strong>: <a href="mailto:kenzojapan64@gmail.com">kenzojapan64@gmail.com</a></p>
        <p><strong>Instagram</strong>: <a href="https://www.instagram.com/gustavo.h.k.oliveira/">gustavo.h.k.oliveira</a></p>
      </div>
      <Footer />
    </div>
  );
}

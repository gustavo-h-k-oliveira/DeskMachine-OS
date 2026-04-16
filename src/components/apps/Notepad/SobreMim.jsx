import "./Notepad.css";
import Menu from "./Menu/Menu";

export default function SobreMim() {
  return (
    <div className="frame">
      <Menu />
      <div className="content">
        <h1>
          Sobre Mim
        </h1>
        <p>
            Sou apaixonado por tecnologia e em transformar 
            dados em soluções reais. Gosto de aprender 
            novas ferramentas e linguagens, mas acima de 
            tudo, gosto de aplicá-las ao mundo real com boas 
            práticas de engenharia de software para criar 
            soluções com propósitos.
        </p>
      </div>
    </div>
  );
}

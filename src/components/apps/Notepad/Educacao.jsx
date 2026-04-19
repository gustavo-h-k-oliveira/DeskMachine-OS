import "./Notepad.css";
import Menu from "./Menu/Menu";

export default function Educacao() {
  return (
    <div className="notepad-frame">
      <Menu />
      <div className="content">
        <h1>
          Educação
        </h1>
        <h2>
          ETEC Presidente Vargas, 2019 - 2021
        </h2>
        <p>
            Ensino médio integrado ao curso técnico de eletrônica.
        </p>
        <br />
        <h2>
          FATEC Pompeia, 2022 - 2026
        </h2>
        <p>
            Big Data no Agronegócio.
        </p>
      </div>
    </div>
  );
}

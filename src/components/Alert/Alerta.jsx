import "./Alerta.css";
import X from '../../assets/icons/WebBrowser/X.png';

export default function Alerta({ onClose }) {
  return (
    <div className="alert-panel">
      <div className="alert-content">
        <img src={X} />
        <p className="alert-message">
          Para melhor experiência, recomendamos que você acesse o DeskMachine OS em um computador.
        </p>
      </div>
      <div className="alert-actions">
        <button className="alert-ok-button" type="button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}

import "./DesktopShortcut.css";

export default function DesktopShortcut({ icon, label, onClick }) {
  return (
    <button className="desktop-shortcut" onClick={onClick}>
      <img src={icon} alt={label} className="desktop-shortcut__icon" />
      <span className="desktop-shortcut__label">{label}</span>
    </button>
  );
}

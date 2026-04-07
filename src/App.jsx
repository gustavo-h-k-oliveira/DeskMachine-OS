import { useState } from "react";
import "./styles.css";
import BootScreen from "./components/BootScreen";

function MainContent() {
  return (
    <div className="app">
      <h1>Bem-vindo ao <strong>DeskMachine OS</strong>!</h1>
    </div>
  );
}

export default function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return bootComplete
    ? <MainContent />
    : <BootScreen onComplete={() => setBootComplete(true)} />;
}

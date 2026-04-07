import { useState } from "react";
import "./styles.css";
import BootScreen from "./components/BootScreen";
import Desktop from "./components/Desktop";

export default function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return bootComplete
    ? <Desktop />
    : <BootScreen onComplete={() => setBootComplete(true)} />;
}

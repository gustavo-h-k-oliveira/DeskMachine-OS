import { useState } from "react";
import "./styles.css";
import BootScreen from "./components/BootScreen/BootScreen";
import Desktop from "./components/Desktop/Desktop";

export default function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return bootComplete
    ? <Desktop />
    : <BootScreen onComplete={() => setBootComplete(true)} />;
}

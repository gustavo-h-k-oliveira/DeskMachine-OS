import { useEffect, useState } from 'react';
import "./Desktop.css";

import DesktopShortcut from './DesktopShortcut';
import AppWindow from '../Window/AppWindow';
import { useWindowStore } from '../../store/windowStore';
import SobreMim from '../apps/SobreMim/SobreMim';
import Computer from '../../assets/icons/computer.png';
import Directory from '../../assets/icons/directory.png';
import WebPage from '../../assets/icons/html.png';
import Notepad from '../../assets/icons/notepad.png';
import Trash from '../../assets/icons/recycle_bin.png';
import Terminal from '../../assets/icons/terminal.png';
import Browser from '../../assets/icons/internet.png';
import Script from '../../assets/icons/script.png';
import Taskbar from "../Taskbar/Taskbar";
import startupSound from '/src/assets/sounds/startup-sound.mp3';

const backgrounds = Object.values(
  import.meta.glob('../../assets/backgrounds/*.{jpg,png}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
);

export default function Desktop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const openWindow = useWindowStore((state) => state.openWindow);
  const windows = useWindowStore((state) => state.windows);

  useEffect(() => {
    if (backgrounds.length === 0) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % backgrounds.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = new Audio(startupSound);
    let isCancelled = false;

    audio.play().catch((err) => {
      if (err.name !== 'AbortError') {
        console.warn('Erro de áudio:', err);
      }
    });

    return () => {
      isCancelled = true;
      audio.pause();
      audio.currentTime = 0;
    };
  }, [startupSound]);

  return (
    <div className="app">
      <div className="backgrounds">
        {backgrounds.map((image, index) => (
          <div
            key={image}
            className={`background ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className='desktop'>
        <DesktopShortcut
          icon={Computer}
          label="Meu Computador"
          onClick={() => alert('Abrindo Meu Computador...')}
        />
        <DesktopShortcut
          icon={Directory}
          label="Documentos"
          onClick={() => alert('Abrindo Documentos...')}
        />
        <DesktopShortcut
          icon={Notepad}
          label="SobreMim.txt"
          onClick={() => openWindow({ id: 'sobre', title: 'SobreMim.txt — Notepad', component: SobreMim })}
        />
        <DesktopShortcut
          icon={WebPage}
          label="Contatos.html"
          onClick={() => alert('Abrindo Contatos...')}
        />
        <DesktopShortcut
          icon={Browser}
          label="Internet Explorer"
          onClick={() => alert('Abrindo Internet...')}
        />
        <DesktopShortcut
          icon={Notepad}
          label="Educação.txt"
          onClick={() => alert('Abrindo Educação...')}
        />
        <DesktopShortcut
          icon={WebPage}
          label="Experiências.html"
          onClick={() => alert('Abrindo Experiências...')}
        />
        <DesktopShortcut
          icon={Script}
          label="Habilidades.bat"
          onClick={() => alert('Abrindo Habilidades...')}
        />
        <DesktopShortcut
          icon={Terminal}
          label="Terminal"
          onClick={() => alert('Abrindo Terminal...')}
        />
        <DesktopShortcut
          icon={Trash}
          label="Lixeira"
          onClick={() => alert('Abrindo Lixeira...')}
        />
      </div>

      {windows.filter((window) => !window.minimized).map((window) => (
        <AppWindow key={window.id} window={window} />
      ))}

      <Taskbar />
    </div>
  );
}

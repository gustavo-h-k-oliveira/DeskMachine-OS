import { useEffect, useState } from 'react';
import "./Desktop.css";

import startupSound from '/src/assets/sounds/startup-sound.mp3';
import DesktopShortcut from './DesktopShortcut';
import AppWindow from '../Window/AppWindow';
import { useWindowStore } from '../../store/windowStore';

import Computer from '../../assets/icons/Desktop/computer.png';
import Directory from '../../assets/icons/Desktop/directory.png';
import WebPage from '../../assets/icons/Desktop/html.png';
import Notepad from '../../assets/icons/Desktop/notepad.png';
import Trash from '../../assets/icons/Desktop/recycle_bin.png';
import Terminal from '../../assets/icons/Desktop/terminal.png';
import Browser from '../../assets/icons/Desktop/internet.png';
import Script from '../../assets/icons/Desktop/script.png';

import Taskbar from "../Taskbar/Taskbar";

import SobreMim from '../apps/Notepad/SobreMim';
import Educacao from '../apps/Notepad/Educacao';
import Contato from '../apps/WebBrowser/Contato';
import Experiencia from '../apps/WebBrowser/Experiencia';
import Homepage from '../apps/WebBrowser/Homepage';
import TerminalConsole from '../apps/Terminal/Terminal';
import Habilidade from '../apps/Terminal/Habilidade';

const backgrounds = Object.values(
  import.meta.glob('../../assets/backgrounds/*.{jpg,png}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
);

backgrounds.forEach((src) => {
  const img = new Image();
  img.src = src;
});

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
    backgrounds.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
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
          onClick={() => openWindow({ id: 'contato', title: "Gustavo's Homepage — Internet Explorer", component: Contato })}
        />
        <DesktopShortcut
          icon={Browser}
          label="Internet Explorer"
          onClick={() => openWindow({ id: 'homepage', title: "Yuhoo!", component: Homepage })}
        />
        <DesktopShortcut
          icon={Notepad}
          label="Educação.txt"
          onClick={() => openWindow({ id: 'educacao', title: 'Educação.txt — Notepad', component: Educacao })}
        />
        <DesktopShortcut
          icon={WebPage}
          label="Experiências.html"
          onClick={() => openWindow({ id: 'experiencia', title: "My Experiences — Internet Explorer", component: Experiencia })}
        />
        <DesktopShortcut
          icon={Script}
          label="Habilidades.bat"
          onClick={() => openWindow({ id: 'habilidade', title: 'Habilidades.bat — Terminal', component: Habilidade })}
        />
        <DesktopShortcut
          icon={Terminal}
          label="Terminal"
          onClick={() => openWindow({ id: 'terminal', title: 'Terminal', component: TerminalConsole })}
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

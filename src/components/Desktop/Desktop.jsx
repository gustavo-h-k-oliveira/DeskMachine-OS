import "./Desktop.css";

import DesktopShortcut from './DesktopShortcut';
import AppWindow from '../Window/AppWindow';
import { useWindowStore } from '../../store/windowStore';
import SobreMim from '../apps/SobreMim';
import Computer from '../../assets/icons/computer.png';
import Directory from '../../assets/icons/directory.png';
import WebPage from '../../assets/icons/html.png';
import Notepad from '../../assets/icons/notepad.png';
import Trash from '../../assets/icons/recycle_bin.png';
import Terminal from '../../assets/icons/terminal.png';
import Browser from '../../assets/icons/internet.png';
import Script from '../../assets/icons/script.png';
import Taskbar from "../Taskbar/Taskbar";

export default function Desktop() {
  const openWindow = useWindowStore((state) => state.openWindow);
  const windows = useWindowStore((state) => state.windows);

  return (
    <div className="app">
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

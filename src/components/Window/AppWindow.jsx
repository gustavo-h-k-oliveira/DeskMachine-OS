import { Rnd } from 'react-rnd';
import { useWindowStore } from '../../store/windowStore';
import './AppWindow.css';

export default function AppWindow({ window }) {
  const updateWindow = useWindowStore((state) => state.updateWindow);
  const closeWindow = useWindowStore((state) => state.closeWindow);
  const focusWindow = useWindowStore((state) => state.focusWindow);

  const AppContent = window.component;

  return (
    <Rnd
      className="app-window"
      size={{ width: window.width, height: window.height }}
      position={{ x: window.x, y: window.y }}
      onDragStop={(e, d) => updateWindow(window.id, { x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, position) => {
        updateWindow(window.id, {
          width: parseInt(ref.style.width, 10),
          height: parseInt(ref.style.height, 10),
          ...position,
        });
      }}
      bounds="parent"
      onMouseDown={() => focusWindow(window.id)}
    >
      <div className="app-window__frame">
        <div className="app-window__titlebar">
          <span>{window.title}</span>
          <button className="app-window__close" onClick={() => closeWindow(window.id)}>
            ×
          </button>
        </div>
        <div className="app-window__content">
          {AppContent ? <AppContent /> : <div>Conteúdo não definido.</div>}
        </div>
      </div>
    </Rnd>
  );
}

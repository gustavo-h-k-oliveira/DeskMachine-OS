import { Rnd } from 'react-rnd';
import { useWindowStore } from '../../store/windowStore';
import './AppWindow.css';

export default function AppWindow({ window }) {
  const updateWindow = useWindowStore((state) => state.updateWindow);
  const closeWindow = useWindowStore((state) => state.closeWindow);
  const focusWindow = useWindowStore((state) => state.focusWindow);
  const minimizeWindow = useWindowStore((state) => state.minimizeWindow);
  const maximizeWindow = useWindowStore((state) => state.maximizeWindow);

  const AppContent = window.component;

  return (
    <Rnd
      className="app-window"
      style={{ zIndex: window.zIndex }}
      size={{ width: window.width, height: window.height }}
      position={{ x: window.x, y: window.y }}
      onDragStop={(e, d) => updateWindow(window.id, { x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, position) => {
        updateWindow(window.id, {
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          x: position?.x ?? window.x,
          y: position?.y ?? window.y,
        });
      }}
      bounds="parent"
      onMouseDown={() => focusWindow(window.id)}
    >
      <div className="app-window__frame">
        <div className="app-window__titlebar">
          <span>{window.title}</span>
          <div className="app-window__buttons">
            <button className="app-window__minimize" onClick={() => minimizeWindow(window.id)}>
              -
            </button>
            <button className="app-window__maximize" onClick={() => maximizeWindow(window.id)}>
              □
            </button>
            <button className="app-window__close" onClick={() => closeWindow(window.id)}>
              ×
            </button>
          </div>
        </div>
        <div className="app-window__content">
          {AppContent ? <AppContent onClose={() => closeWindow(window.id)} /> : <div>Conteúdo não definido.</div>}
        </div>
      </div>
    </Rnd>
  );
}

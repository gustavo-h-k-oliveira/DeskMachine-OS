import { useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';
import { useWindowStore } from '../../store/windowStore';
import './AppWindow.css';

export default function AppWindow({ window: win }) {
  const updateWindow = useWindowStore((state) => state.updateWindow);
  const closeWindow = useWindowStore((state) => state.closeWindow);
  const focusWindow = useWindowStore((state) => state.focusWindow);
  const minimizeWindow = useWindowStore((state) => state.minimizeWindow);
  const maximizeWindow = useWindowStore((state) => state.maximizeWindow);

  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const AppContent = win.component;

  return (
    <Rnd
      className="app-window"
      style={{ zIndex: win.zIndex }}
      size={{ width: win.width, height: win.height }}
      position={{ x: win.x, y: win.y }}
      dragHandleClassName="app-window__titlebar"
      cancel="button, .app-window__buttons, .app-window__content"
      disableDragging={isMobile}
      enableResizing={!isMobile}
      onDragStop={(_, d) => updateWindow(win.id, { x: d.x, y: d.y })}
      onResizeStop={(_e, _direction, ref, _delta, position) => {
        updateWindow(win.id, {
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          x: position?.x ?? win.x,
          y: position?.y ?? win.y,
        });
      }}
      bounds="parent"
      onMouseDown={() => focusWindow(win.id)}
      onTouchStart={() => focusWindow(win.id)}
    >
      <div className="app-window__frame">
        <div className="app-window__titlebar">
          <span>{win.title}</span>
          <div className="app-window__buttons">
            <button
              type="button"
              className="app-window__minimize"
              onClick={(e) => {
                e.stopPropagation();
                minimizeWindow(win.id);
              }}
            >
              -
            </button>
            <button
              type="button"
              className="app-window__maximize"
              onClick={(e) => {
                e.stopPropagation();
                maximizeWindow(win.id);
              }}
            >
              □
            </button>
            <button
              type="button"
              className="app-window__close"
              onClick={(e) => {
                e.stopPropagation();
                closeWindow(win.id);
              }}
            >
              ×
            </button>
          </div>
        </div>
        <div className="app-window__content">
          {AppContent ? <AppContent onClose={() => closeWindow(win.id)} /> : <div>Conteúdo não definido.</div>}
        </div>
      </div>
    </Rnd>
  );
}


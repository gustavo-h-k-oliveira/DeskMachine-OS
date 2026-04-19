import { useEffect, useState } from 'react';
import { useWindowStore } from '../../store/windowStore';
import "./Taskbar.css";

import Network from '../../assets/icons/Taskbar/network_pcs.png';
import Speaker from '../../assets/icons/Taskbar/loudspeaker.png';
import Check from '../../assets/icons/Taskbar/check.png';

export default function Taskbar() {
    const [time, setTime] = useState(() => new Date());
    const windows = useWindowStore((state) => state.windows);
    const focusWindow = useWindowStore((state) => state.focusWindow);
    const restoreWindow = useWindowStore((state) => state.restoreWindow);

    const focusedWindowId = windows
        .filter((window) => !window.minimized)
        .reduce((activeId, window) => {
            const active = windows.find((w) => w.id === activeId);
            if (!active) return window.id;
            return window.zIndex > active.zIndex ? window.id : activeId;
        }, null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="taskbar">
            <button className="main-button">
                <strong>Start</strong>
            </button>
            <div className='separator'></div>
            <div className="taskbar-apps">
                {windows.map((window) => (
                    <button
                        key={window.id}
                        className={`taskbar-button ${window.id === focusedWindowId ? 'active' : ''}`}
                        onClick={() => (window.minimized ? restoreWindow(window.id) : focusWindow(window.id))}
                    >
                        {window.title}
                    </button>
                ))}
            </div>
            <div className="status-bar">
                <img src={Check} alt="Check" className="status-icon" />
                <img src={Network} alt="Network" className="status-icon" />
                <img src={Speaker} alt="Speaker" className="status-icon" />
                <span className="status-time">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        </div>
    );
}

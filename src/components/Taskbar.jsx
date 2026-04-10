import { useEffect, useState } from 'react';
import "./Taskbar.css";

import Network from '../assets/icons/network_pcs.png';
import Speaker from '../assets/icons/loudspeaker.png';
import Check from '../assets/icons/check.png';

export default function Taskbar() {
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="taskbar">
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

import { useEffect, useState } from "react";

const bootLines = [
    "DeskMachine OS v1.0\n\nCopyright (C) DeskMachine Corp. 1998-2026\nAll rights reserved.\n_________________________________________________________________________",
    "Initializing system...............OK",
    "Loading core modules..............OK\n\n[██████░░░░░░░░░░] 32%",
    "Checking hardware.................OK",
    "Initializing kernel.............. OK\n\n[████████████░░░░] 68%",
    "Starting interface services.......OK",
    "Launching user environment........OK\n\n[████████████████] 100%\n_________________________________________________________________________",
    "Welcome, Gustavo. ❤"
];

export default function BootScreen({ onComplete }) {
    const [lines, setLines] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (current >= bootLines.length) {
            const timeout = setTimeout(onComplete, 3000);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setLines((prev) => [...prev, bootLines[current]]);
            setCurrent((prev) => prev + 1);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [current, onComplete]);

    return (
        <div className="boot-screen">
            <div className="boot-screen__content">
                {lines.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    );
}

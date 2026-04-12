import { create } from 'zustand';

export const useWindowStore = create((set) => ({
    windows: [],
    openWindow: (app) => set((state) => ({
        windows: [
            ...state.windows,
            {
                ...app,
                id: `${app.id}-${Date.now()}`,
                x: 80,
                y: 80,
                width: 420,
                height: 320,
                zIndex: state.windows.length + 1,
                minimized: false,
            },
        ],
    })),

    closeWindow: (id) => set((state) => ({ windows: state.windows.filter((w) => w.id !== id) })),
    minimizeWindow: (id) => set((state) => ({ windows: state.windows.map((w) => w.id === id ? { ...w, minimized: true } : w) })),
    focusWindow: (id) => set((state) => ({ windows: state.windows.map((w) => ({ ...w, zIndex: w.id === id ? Date.now() : w.zIndex })) })),
    updateWindow: (id, changes) => set((state) => ({ windows: state.windows.map((w) => w.id === id ? { ...w, ...changes } : w) })),
}));

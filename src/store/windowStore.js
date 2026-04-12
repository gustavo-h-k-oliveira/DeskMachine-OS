import { create } from 'zustand';

export const useWindowStore = create((set) => ({
    windows: [],
    nextWindowId: 1,
    nextZIndex: 1,

    openWindow: (app) => set((state) => ({
        windows: [
            ...state.windows,
            {
                ...app,
                id: `${app.id}-${state.nextWindowId}`,
                x: 80,
                y: 80,
                width: 420,
                height: 320,
                zIndex: state.nextZIndex,
                minimized: false,
            },
        ],
        nextWindowId: state.nextWindowId + 1,
        nextZIndex: state.nextZIndex + 1,
    })),

    closeWindow: (id) => set((state) => ({
        windows: state.windows.filter((w) =>
            w.id !== id
        )
    })),

    minimizeWindow: (id) => set((state) => ({
        windows: state.windows.map((w) =>
            w.id === id ? { ...w, minimized: true } : w
        )
    })),

    restoreWindow: (id) => set((state) => ({
        windows: state.windows.map((w) =>
            w.id === id ? { ...w, minimized: false, zIndex: state.nextZIndex } : w
        ),
        nextZIndex: state.nextZIndex + 1,
    })),

    focusWindow: (id) => set((state) => ({
        windows: state.windows.map((w) =>
            w.id === id ? { ...w, zIndex: state.nextZIndex } : w
        ),
        nextZIndex: state.nextZIndex + 1,
    })),

    updateWindow: (id, changes) => set((state) => ({
        windows: state.windows.map((w) =>
            w.id === id ? { ...w, ...changes } : w)
    })),
}));

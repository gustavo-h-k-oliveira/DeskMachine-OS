import { create } from 'zustand';

const getTaskbarHeight = () => {
    if (typeof document === 'undefined') return 0;
    const taskbar = document.querySelector('.taskbar');
    return taskbar?.offsetHeight ?? 0;
};

export const useWindowStore = create((set) => ({
    windows: [],
    nextWindowId: 1,
    nextZIndex: 1,

    openWindow: (app) => {
        const isSmallScreen =
            typeof window !== 'undefined' && window.innerWidth < 500;

        const taskbarHeight = getTaskbarHeight();

        const defaultSize = isSmallScreen
            ? {
                x: 0,
                y: 0,
                width: window.innerWidth,
                height: window.innerHeight - taskbarHeight,
            } : {
                x: 80,
                y: 80,
                width: 420,
                height: 320,
            };

        return set((state) => ({
            windows: [
                ...state.windows,
                {
                    ...app,
                    id: `${app.id}-${state.nextWindowId}`,
                    ...defaultSize,
                    zIndex: state.nextZIndex,
                    minimized: false,
                },
            ],
            nextWindowId: state.nextWindowId + 1,
            nextZIndex: state.nextZIndex + 1,
        }));
    },

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

    maximizeWindow: (id) => set((state) => ({
        windows: state.windows.map((w) =>
            w.id === id
                ? {
                    ...w,
                    x: 0,
                    y: 0,
                    width: window.innerWidth,
                    height: window.innerHeight - getTaskbarHeight(),
                }
            : w
        )
    }))
}));

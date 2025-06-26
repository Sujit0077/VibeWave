import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("VibeWave-theme") || "forest",
  setTheme: (theme) => {
    localStorage.setItem("VibeWave-theme", theme);
    set({ theme });
  },
}));

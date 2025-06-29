import { createContext } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
    // Always dark/cyber mode, toggle does nothing
    const isDarkMode = true;
    const toggleTheme = () => {};
    return [isDarkMode, toggleTheme];
}
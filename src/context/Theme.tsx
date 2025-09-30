import { createContext } from "react";

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  changeTheme: () => {}
});
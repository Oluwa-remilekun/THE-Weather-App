import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();
const THEME_KEY = 'theme';

function ThemeProvider({ children }) {
  // Initialize theme from localStorage or system preference
  const getInitialTheme = () => {
    try {
      const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY));
      if (savedTheme !== null) return savedTheme;
    } catch (error) {
      console.error('Error reading theme from localStorage:', error);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [dark, setDark] = useState(getInitialTheme);

  // Update localStorage and apply theme to document
  const saveThemeToLocalStorage = (theme) => {
    localStorage.setItem(THEME_KEY, JSON.stringify(theme));
    document.documentElement.setAttribute('data-theme', theme ? 'dark' : 'light');
  };

  // Sync theme on mount and when `dark` changes
  useEffect(() => {
    saveThemeToLocalStorage(dark);
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark, saveThemeToLocalStorage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
export default ThemeContext;

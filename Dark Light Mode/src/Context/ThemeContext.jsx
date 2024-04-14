import { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext();

export const useTheme = () => {
  return useContext(themeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const theme = isDarkMode ? "dark" : "light";
  const contextValue = { theme, toggleTheme };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);
  return (
    <themeContext.Provider value={contextValue}>
      {children}
    </themeContext.Provider>
  );
};

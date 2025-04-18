import { useEffect, useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  const saveTheme = function (theme) {
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  useEffect(function () {
    const savedTheme = JSON.parse(localStorage.getItem("theme"));
    if (savedTheme !== "") {
      setDark(savedTheme);
      return;
    }

    const isSystemThemeDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDark(isSystemThemeDark === true);
    console.log(isSystemThemeDark);
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, setDark, saveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
export default ThemeContext;

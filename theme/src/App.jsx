import { useState,useEffect} from "react";
import ThemeBtn from "../components/ThemeBtn";

import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import Card from "../components/Card";

function App() {
  const [themeMode, setthemeMode] = useState("light");
  const lightTheme = () => {
    setthemeMode("light");
  };
  const darkTheme = () => {
    setthemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <Card />
          <div className="w-full max-w-sm mx-auto"></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

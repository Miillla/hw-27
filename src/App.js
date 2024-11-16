import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { HeaderContext, ThemeContext } from "./contexts";
import About from "./page/About";
import HomePage from "./page/Home";
import Contacts from "./page/Contacts";
import NotFound from "./page/NotFound";

function App() {
  const [value, setValue] = useState(0);
  const [menu, setMenu] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetch("http://localhost:3000/menu.json")
      .then((res) => res.json())
      .then((result) => {
        setMenu(result);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
      });
  }, []);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <HeaderContext.Provider value={{ text: value, menu }}>
            <Header />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </HeaderContext.Provider>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import { HeaderContext, ThemeContext } from "../contexts";

export default function Button() {
  const { text } = useContext(HeaderContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`${
        theme === "light" ? "Button" : "Button_dark"
      } btn btn-primary `}
    >
      Change {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

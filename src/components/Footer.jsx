import React, { useContext } from "react";
import { ThemeContext } from "../contexts";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return <div className={`footer ${theme}`}>Footer(theme:{theme})</div>;
}

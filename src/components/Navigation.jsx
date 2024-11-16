import React, { useContext } from "react";

import Button from "./Button";
import { HeaderContext, ThemeContext } from "../contexts";
import { Link } from "react-router-dom";

export default function Navigation({ text }) {
  const { menu } = useContext(HeaderContext);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <nav className="p-2 ">
        <ul className="d-flex justify-content-around gap-3 ">
          {menu.map((item, index) => (
            <li
              className="d-flex justify-content-center"
              key={item.id || index}
            >
              <Link className="text-white" to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="ms-auto p-2">
        <Button text={text} />
      </div>
    </>
  );
}

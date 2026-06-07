import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";
export default function Nav({ onSecretClick }) {
  const [secretClicks, setSecretClicks] = useState(0);

  function handleSecretClick() {
    const next = secretClicks + 1;
    setSecretClicks(next);
    if (next >= 1) {
      onSecretClick?.();
      setSecretClicks(0);
    }
  }

  return (
    <header>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/about">About Me</NavLink></li>
          <li><NavLink to="/cv">CV</NavLink></li>
          <li>
            <span id="secret" onClick={handleSecretClick} aria-hidden="true">
              secret
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

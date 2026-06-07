import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import CV from "./pages/CV";

export default function App() {
  const [emailOpen, setEmailOpen] = useState(false);
  const [easterOpen, setEasterOpen] = useState(false);
  const [baconBg, setBaconBg] = useState(false);

  // Keyboard easter egg: type "1337"
  useEffect(() => {
    let typed = "";
    function handleKey(e) {
      typed += e.key;
      if (typed.length > 4) typed = typed.slice(-4);
      if (typed === "1337") {
        setEasterOpen(true);
        typed = "";
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <BrowserRouter>
      <div
        className={`app-wrapper${baconBg ? " bacon-bg" : ""}`}
      >
        <Nav onSecretClick={() => setBaconBg(true)} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer onEmailClick={() => setEmailOpen(true)} />

        <Modal id="email-modal" isOpen={emailOpen} onClose={() => setEmailOpen(false)}>
          <h2>Contact me</h2>
          <p style={{ fontWeight: 600 }}>erik.backdahl@gmail.com</p>
        </Modal>

        <Modal id="easter-modal" isOpen={easterOpen} onClose={() => setEasterOpen(false)}>
          <h2>what are you doing here</h2>
          <img src="images/kekwait.png" alt="Easter Egg" />
        </Modal>
      </div>
    </BrowserRouter>
  );
}

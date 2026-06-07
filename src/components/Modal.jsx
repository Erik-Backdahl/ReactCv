import "./Modal.css";
import { useEffect } from "react";

export default function Modal({ id, isOpen, onClose, children }) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id={id}
      className="modal"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <button className="close-btn" onClick={onClose} aria-label="Close">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

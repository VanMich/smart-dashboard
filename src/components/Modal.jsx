import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Modal = ({ children, onClose }) => {
  const backdropRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Focus the first focusable element inside the modal for accessibility
  useEffect(() => {
    const el = document.querySelector(
      ".modal-content button, .modal-content input, .modal-content a, .modal-content textarea, .modal-content select"
    );
    if (el) el.focus();
  }, []);

  const onBackdropMouseDown = (e) => {
    // If the click is directly on the backdrop (outside modal content), close
    if (e.target === backdropRef.current) onClose?.();
  };

  return (
    <div
      ref={backdropRef}
      onMouseDown={onBackdropMouseDown}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        className="modal-content bg-white rounded-lg shadow-lg w-full max-w-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        onMouseDown={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;

import React from "react";
import "./Modal.css";
import { motion } from "framer-motion";

function Modal({ selectedImg, setSelectedImg }) {
  const handleImgClick = (e) => {
    if (e.target.classList.contains("Modal")) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="Modal"
      onClick={handleImgClick}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        src={selectedImg}
        alt="selected img"
      />
    </motion.div>
  );
}

export default Modal;

import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-md p-4 flex justify-between items-center"
    >
      <h2 className="text-xl font-semibold">Tableau de bord</h2>
      <div className="flex items-center gap-4">
        <span>👤 Admin</span>
      </div>
    </motion.header>
  );
};

export default Navbar;

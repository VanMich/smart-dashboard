import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-white shadow-md p-5 hidden md:block"
    >
      <h1 className="text-2xl font-bold mb-8 text-blue-600">SmartDashboard</h1>
      <nav className="flex flex-col gap-4">
        <a href="#" className="text-gray-700 hover:text-blue-600">
          🏠 Dashboard
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          📊 Statistiques
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          🧾 Transactions
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          ⚙️ Paramètres
        </a>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;

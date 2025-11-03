import React from "react";
import { motion } from "framer-motion";

const TransactionTable = ({ transactions }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 rounded-xl shadow-md mt-6"
    >
      <h4 className="text-lg font-semibold mb-4">Transactions récentes</h4>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">Client</th>
            <th className="p-2">Montant (€)</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="hover:bg-gray-50 border-b">
              <td className="p-2">{t.client}</td>
              <td className="p-2 font-semibold text-blue-600">{t.montant}</td>
              <td className="p-2">{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default TransactionTable;

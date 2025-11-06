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
        <thead className="bg-gray-50">
          <tr className="border-b">
            <th className="text-left p-3 text-gray-700">Client</th>
            <th className="text-left p-3 text-gray-700">Montant (€)</th>
            <th className="text-left p-3 text-gray-700">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr
              key={t.id}
              className="border-b hover:bg-gray-50 transition-colors"
            >
              <td className="p-3 text-gray-800">{t.client}</td>
              <td className="p-3 text-gray-800">{t.montant}</td>
              <td className="p-3 text-gray-500">{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default TransactionTable;

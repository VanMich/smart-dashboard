import { motion } from "framer-motion";

import { salesData, transactions } from "../data/mockData";
import ChartCard from "../components/ChartCard";
import TransactionTable from "../components/TransactionTable";
import { useEffect, useState } from "react";
import { getSales, getTransactions } from "../utils/firebaseUtils";

const Dashboard = () => {
  //state pour stocker les ventes recuperees depuis firestore
  const [saleData, setSalesData] = useState([]);
  //state pour stocker les transactions recupees depuis firestore
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sales = await getSales();
      const trans = await getTransactions();
      setTransactions(trans);
      setSalesData(sales);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Vue d’ensemble</h3>

      {/* Cartes résumées */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="bg-white p-4 rounded-xl shadow-md">
          <p className="text-gray-500">Total ventes</p>
          <h2 className="text-2xl font-bold text-blue-600">
            {saleData > 0
              ? `${saleData.reduce((acc, s) => acc + s.sales, 0)} FCFA`
              : "chargement..."}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <p className="text-gray-500">Commandes</p>
          <h2 className="text-2xl font-bold text-green-600">
            {transactions.length}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <p className="text-gray-500">Clients</p>
          <h2 className="text-2xl font-bold text-yellow-500">
            {transactions.length}
          </h2>
        </div>
      </motion.div>

      {/* Graphique des ventes */}
      {saleData.length > 0 && <ChartCard data={salesData} />}

      {/* Tableau transactions */}
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default Dashboard;

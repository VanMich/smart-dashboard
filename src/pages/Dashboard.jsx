import { motion } from "framer-motion";

// import { salesData, transactions } from "../data/mockData";
import { useEffect, useState } from "react";
import AddTransactionForm from "../components/AddTransactionForm";
import ChartCard from "../components/ChartCard";
import TransactionTable from "../components/TransactionTable";
import { getSales, getTransactions } from "../utils/firebaseUtils";

const Dashboard = () => {
  //state pour stocker les ventes recuperees depuis firestore
  const [salesData, setSalesData] = useState([]);
  //state pour stocker les transactions recupees depuis firestore
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sales = await getSales();
        const trans = await getTransactions();
        setTransactions(trans);
        setSalesData(sales);
      } catch (err) {
        console.error("Erreur lors de la récupération depuis Firestore:", err);
      }
    };
    fetchData();
  }, []);

  // function pour eviter les doublons lors du comptage du nombre de client
  const countClient = (transactions) => {
    // Sécurité : transactions doit être un tableau
    if (!Array.isArray(transactions) || transactions.length === 0) return 0;

    // Normaliser les noms pour éviter les doublons dus à la casse, espaces
    // ou accents (ex: "Éric" vs "eric"). On enlève les accents via NFD.
    const normalized = transactions
      .map((t) => (t && t.client ? String(t.client) : ""))
      .map((name) => name.trim().toLowerCase())
      .filter((name) => name.length > 0);

    const uniqClient = new Set(normalized);
    return uniqClient.size;
  };

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
            {salesData.length > 0
              ? `${salesData.reduce((acc, s) => acc + s.sales, 0)} FCFA`
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
            {countClient(transactions)}
          </h2>
        </div>
      </motion.div>

      {/* Graphique des ventes */}
      {salesData.length > 0 && <ChartCard data={salesData} />}

      {/* Tableau transactions : on passe un handler pour ajouter la transaction
          afin que le parent (Dashboard) mette à jour son state global */}
      <TransactionTable
        transactions={transactions}
        onTransactionAdded={(t) => setTransactions((prev) => [t, ...prev])}
      />
    </div>
  );
};

export default Dashboard;

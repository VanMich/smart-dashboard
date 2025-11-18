import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AddTransactionForm from "./AddTransactionForm";
import Modal from "./Modal";

/**
 * TransactionTable
 * - Affiche la liste des transactions
 * - Contient un bouton "Add Transaction" qui ouvre une modal
 * - Lorsqu'une transaction est ajoutée via le formulaire, appelle
 *   `onTransactionAdded` (prop) pour que le parent mette à jour sa state.
 *
 * Props:
 * - transactions: array des transactions (obligatoire)
 * - onTransactionAdded: fonction optional(transaction) appelée après ajout
 */
const TransactionTable = ({ transactions = [], onTransactionAdded }) => {
  // État local pour contrôler l'affichage de la modal
  const [showAddModal, setShowAddModal] = useState(false);

  // État local copié des props pour permettre un rendu optimiste local
  const [localTransactions, setLocalTransactions] = useState(transactions);

  // Sync localTransactions quand la prop transactions change
  useEffect(() => {
    setLocalTransactions(transactions);
  }, [transactions]);

  // Callback appelé par le formulaire lorsqu'une nouvelle transaction est ajoutée
  const handleAdded = (newTransaction) => {
    // Mettre à jour l'état local pour affichage immédiat
    setLocalTransactions((prev) => [newTransaction, ...prev]);

    // Notifier le parent s'il fournit un handler
    onTransactionAdded?.(newTransaction);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-4 rounded-xl shadow-md mt-6"
      >
        <div className="flex items-center mb-4 justify-between">
          <h4 className="text-lg font-semibold ">Transactions récentes</h4>

          {/* Bouton qui ouvre la modal pour ajouter une transaction */}
          <button
            className="bg-blue-500 py-2 px-3 rounded cursor-pointer font-semibold text-white"
            onClick={() => setShowAddModal(true)}
          >
            ➕ Add Transaction
          </button>
        </div>

        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50">
            <tr className="border-b">
              <th className="text-left p-3 text-gray-700">Client</th>
              <th className="text-left p-3 text-gray-700">Montant (FCFA)</th>
              <th className="text-left p-3 text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {localTransactions.map((t) => (
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

      {/* Modal contenant le formulaire d'ajout */}
      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          {/*
            On fournit deux props: onAdded pour recevoir la transaction ajoutée,
            et onClose pour fermer la modal depuis le formulaire.
          */}
          <AddTransactionForm
            onAdded={handleAdded}
            onClose={() => setShowAddModal(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default TransactionTable;

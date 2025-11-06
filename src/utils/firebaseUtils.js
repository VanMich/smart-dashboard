import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";

// sales/
// ├── abc123 (ID auto-généré)
// │   ├── month: "Janvier"
// │   ├── sales: 12000
// │   └── year: 2025
// ├── def456
// │   ├── month: "Février"
// │   ├── sales: 15000
// │   └── year: 2025
// └── ...
//resultat de getSales
// [
//   { id: "abc123", month: "Janvier", sales: 12000, year: 2025 },
//   { id: "def456", month: "Février", sales: 15000, year: 2025 },
//   // ...
// ]
// Lire toutes les ventes
export const getSales = async () => {
  const snapshot = await getDocs(collection(db, "sales"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

//Lire toutes les transactions
export const getTransactions = async () => {
  const snapshot = await getDocs(collection(db, "transactions"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

//Ajouter une transaction
export const addTransaction = async (transaction) => {
  await addDoc(collection(db, "transactions"), transaction);
};

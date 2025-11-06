// src/data/mockData.js

export const salesData = [
  { month: "Janvier", sales: 12000 },
  { month: "Février", sales: 19000 },
  { month: "Mars", sales: 15000 },
  { month: "Avril", sales: 22000 },
  { month: "Mai", sales: 30000 },
  { month: "Juin", sales: 25000 },
  { month: "Juillet", sales: 32000 },
  { month: "Août", sales: 29000 },
  { month: "Septembre", sales: 34000 },
  { month: "Octobre", sales: 38000 },
  { month: "Novembre", sales: 41000 },
  { month: "Décembre", sales: 45000 },
];

export const transactions = [
  { id: 1, client: "Alice Dupont", montant: 230, date: "2025-10-01" },
  { id: 2, client: "Jean Kouadio", montant: 120, date: "2025-10-02" },
  { id: 3, client: "Maria Lopes", montant: 560, date: "2025-10-05" },
  { id: 4, client: "Eric N'Diaye", montant: 340, date: "2025-10-10" },
  { id: 5, client: "Sonia Mbappe", montant: 180, date: "2025-10-12" },
];

// // Fonction pour compter les clients uniques
// export const getUniqueClientsCount = () => {
//   const uniqueClients = new Set(
//     transactions.map((transaction) => transaction.client)
//   );
//   return uniqueClients.size;
// };

// // Fonction pour obtenir la liste des clients uniques
// export const getUniqueClients = () => {
//   const uniqueClients = new Set(
//     transactions.map((transaction) => transaction.client)
//   );
//   return Array.from(uniqueClients);
// };

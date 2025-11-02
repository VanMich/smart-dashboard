import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Vue d’ensemble</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">💰 Total ventes</div>
        <div className="bg-white p-4 rounded shadow">🛍️ Commandes</div>
        <div className="bg-white p-4 rounded shadow">👥 Clients</div>
      </div>
    </div>
  );
};

export default Dashboard;

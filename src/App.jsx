import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

// Layout utilisé pour les pages authentifiées (sidebar + navbar + contenu)
const AppLayout = ({ children }) => (
  <div className="flex bg-gray-100 min-h-screen text-gray-800">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Navbar />
      <main className="p-6">{children}</main>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route publique pour le login */}
        <Route path="/login" element={<Login />} />

        {/* Routes protégées : wrapper ProtectedRoute pour vérifier l'auth */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Dashboard />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        {/* Redirections / route par défaut */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

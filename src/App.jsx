import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen text-gray-800">
      {/* Sidebar */}
      <Sidebar />
      {/* Contenu principal */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;

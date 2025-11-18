import { signOut } from "firebase/auth";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { auth } from "../firebase";

const Navbar = () => {
  const navigate = useNavigate();

  //fonction pour la deconnexion
  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Déconnecté");
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Erreur lors de la déconnexion");
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-md p-4 flex justify-between items-center"
    >
      <h2 className="text-xl font-semibold">Tableau de bord</h2>
      <div className="flex items-center gap-5">
        <button
          onClick={logout}
          className="bg-red-500 p-2 text-white font-semibold rounded cursor-pointer"
        >
          Deconnexion
        </button>
        <span>👤 Admin</span>
      </div>
    </motion.header>
  );
};

export default Navbar;

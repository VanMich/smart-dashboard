import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { auth } from "../firebase";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // onSubmit reçoit les valeurs du formulaire (fourni par react-hook-form)
  const onSubmit = async (data) => {
    try {
      // Utiliser les valeurs email et password provenant du formulaire
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Connexion réussie 👌");
      navigate("/dashboard");
    } catch (error) {
      // Afficher une erreur conviviale et logger l'erreur complète
      toast.error("Email ou mot de passe incorrect");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Connexion Admin</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              {...register("email")}
              type="email"
              className="w-full border p-2 rounded-lg"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700">Mot de passe</label>
            <input
              {...register("password")}
              type="password"
              className="w-full border p-2 rounded-lg"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg cursor-pointer"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

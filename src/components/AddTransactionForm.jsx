import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { db } from "../firebase";

/**
 * AddTransactionForm
 * Props:
 * - onClose: fonction appelée pour fermer la modal
 * - onAdded: fonction appelée avec la transaction nouvellement ajoutée (avec id)
 */
const AddTransactionForm = ({ onClose, onAdded }) => {
  //utilisation d'un hook utilitaire pour creer des formulaires
  const { register, handleSubmit, reset } = useForm();

  //permet d'ajouter des transaction dans firebase
  const onSubmit = async (data) => {
    try {
      // Créer le document dans Firestore
      const docRef = await addDoc(collection(db, "transactions"), {
        client: data.client,
        montant: parseFloat(data.montant),
        // Si l'utilisateur n'a pas choisi de date, utiliser la date actuelle
        date: data.date || Timestamp.now(),
      });

      // Construire l'objet transaction complet avec l'id retourné
      const newTransaction = {
        id: docRef.id,
        client: data.client,
        montant: parseFloat(data.montant),
        date: data.date || new Date().toISOString().split("T")[0],
      };

      toast.success("Transaction ajoutée avec succès ✅");
      reset();

      // Notifier le parent que la transaction a été ajoutée
      onAdded?.(newTransaction);
      // Fermer la modal si onClose fourni
      onClose?.();
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Erreur lors de l'ajout ❌");
    }
  };
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6 w-full  mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        ➕ Ajouter une transaction
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700">Client</label>
          <input
            {...register("client", { required: true })}
            placeholder="Nom du client"
            className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-700">Montant (FCFA)</label>
          <input
            type="number"
            step="0.01"
            {...register("montant", { required: true })}
            placeholder="Montant de la transaction"
            className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            {...register("date")}
            className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default AddTransactionForm;

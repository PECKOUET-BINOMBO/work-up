import React from "react";

function Voir({ item, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center bg-white p-5 rounded-lg shadow-xl">
        <h2 className="text-xl text-orange-400 font-bold mb-4">
          Voir {item}
        </h2>
        {/* Ici, vous pouvez ajouter le contenu spécifique pour afficher les détails de l'item */}
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Voir;
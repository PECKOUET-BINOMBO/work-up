import React from "react";

function Edit({ item, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center bg-white p-5 rounded-lg shadow-xl">
        <h2 className="text-xl text-orange-400 font-bold mb-4">
          Modifier {item}
        </h2>
        {/* Ici, vous pouvez ajouter un formulaire pour éditer les détails de l'item */}
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Annuler
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              // Logique pour sauvegarder les modifications
              onClose();
            }}
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
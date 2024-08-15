import React, { useState } from "react";
import "../../css/compte.css";
import Navbar from "../../Components/navbar/navbar";
import CompteLeft from "../../Components/compteLeft/compteLetf";
import CompteRight from "../../Components/compteRight/compteRight";
import Delete from "../../Components/modals/delete";// Assurez-vous de créer ce composant

function Compte() {
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDelete = (item) => {
    setItemToDelete(item);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    // Logique de suppression ici
    console.log(`Suppression de ${itemToDelete}`);
    setShowModal(false);
    setItemToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setItemToDelete(null);
  };

  return (
    <div>
      <Navbar />
      <div className="py-10 px-5 content-center w-11/12 mx-auto">
        <div className="flex mb-5">
          <CompteLeft />
          <CompteRight onDelete={handleDelete} />
        </div>
      </div>
      {showModal && (
        <Delete
          message={`Êtes-vous sûr de vouloir supprimer ${itemToDelete} ?`}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
}

export default Compte;
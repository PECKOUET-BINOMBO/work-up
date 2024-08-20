import React, { useState } from "react";
import "../../css/compte.css";
import Navbar from "../../Components/navbar/navbar";
import CompteLeft from "../../Components/compteLeft/compteLetf";
import CompteRight from "../../Components/compteRight/compteRight";
import Delete from "../../Components/modals/delete";
import Voir from "../../Components/modals/voir";
import Edit from "../../Components/modals/edit";

function Compte() {
  // État pour gérer l'affichage du modal de suppression
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // État pour stocker l'élément à supprimer
  const [itemToDelete, setItemToDelete] = useState(null);
  
  // États pour gérer l'affichage des modals de vue et d'édition
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  // État pour stocker l'élément à voir ou éditer
  const [currentItem, setCurrentItem] = useState(null);

  // Fonction pour gérer la demande de suppression
  const handleDelete = (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  // Fonction pour confirmer la suppression
  const handleConfirmDelete = () => {
    console.log(`Suppression de ${itemToDelete}`);
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  // Fonction pour annuler la suppression
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  // Fonction pour gérer l'ouverture du modal de vue
  const handleView = (item) => {
    setCurrentItem(item);
    setShowViewModal(true);
  };

  // Fonction pour gérer l'ouverture du modal d'édition
  const handleEdit = (item) => {
    setCurrentItem(item);
    setShowEditModal(true);
  };

  return (
    <div>
      <Navbar />
      <div className="py-10 px-5 content-center w-11/12 mx-auto">
        <div className="flex mb-5">
          <CompteLeft />
          <CompteRight 
            onDelete={handleDelete} 
            onView={handleView}
            onEdit={handleEdit}
          />
        </div>
      </div>

      {/* Modal de suppression */}
      {showDeleteModal && (
        <Delete
          message={`Êtes-vous sûr de vouloir supprimer ${itemToDelete} ?`}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

      {/* Modal de vue */}
      {showViewModal && (
        <Voir
          item={currentItem}
          onClose={() => setShowViewModal(false)}
        />
      )}

      {/* Modal d'édition */}
      {showEditModal && (
        <Edit
          item={currentItem}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
}

export default Compte;
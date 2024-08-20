import React, { useState } from "react"; // Importer useState pour gérer l'état local
import { motion, AnimatePresence } from "framer-motion"; // Importer framer-motion pour les animations
import Navbar2 from "../../Components/navbar/navbar2";
import comment from "../../img/Comment.png";

function Register() {
  // État pour contrôler l'affichage du formulaire
  const [showForm, setShowForm] = useState(false);

  // Fonction pour afficher le formulaire
  const handleContinue = () => {
    setShowForm(true);
  };

  // Fonction pour masquer le formulaire et revenir à la sélection du profil
  const handleBack = () => {
    setShowForm(false);
  };

  // Configuration de l'animation pour le formulaire
  const formAnimation = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <div>
      <Navbar2 />
      <div className="text-center">
        <AnimatePresence mode="wait">
          {!showForm ? (
            // Section de sélection du profil
            <motion.div
              key="profile-selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mt-10">
                <h2 className="text-2xl font-medium text-center">
                  Bienvenue sur{" "}
                  <span className="text-orange-500 font-bold">WORK UP.</span>{" "}
                  Commencez maintenant.
                </h2>
              </div>

              <div className="w-5/12 mx-auto my-5">
              {/* TODO remplacer image par une qui explique mieux les étapes de l'inscription, l'ajout ou consultation... */}
                <img
                  src={comment}
                  alt="comment"
                  className="w-full object-cover object-center"
                />
              </div>

              <div className="my-5">
                <h2 className=" font-medium text-2xl text-orange-500">
                  Inscrivez-vous gratuitement
                </h2>
                <p>Choisissez votre profil : </p>
              </div>
              <form>
                <div className="flex items-center justify-between w-5/12 mx-auto mb-5">
                  {/* Options de profil */}
                  <div className="rounded shadow-xl bg-white p-5">
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="client"
                        className="text-orange-500 font-bold"
                      >
                        Client <span className="text-red-600 font-bold">*</span>
                      </label>
                      <input
                        type="radio"
                        name="profil"
                        id="client"
                        className="border-2 border-gray-300 focus:ring-black text-black w-4 h-4 "
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-500">
                      Je cherche un prestataire
                    </p>
                  </div>

                  <div className="rounded shadow-xl bg-white p-5">
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="prestataire"
                        className="text-orange-500 font-bold"
                      >
                        Prestataire <span className="text-red-600 font-bold">*</span>
                      </label>
                      <input
                        type="radio"
                        name="profil"
                        id="prestataire"
                        className="border-2 border-gray-300 focus:ring-black text-black w-4 h-4 "
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-500">
                      Je propose mes services
                    </p>
                  </div>
                </div>

                <div className="w-5/12 m-auto my-5 flex items-center justify-end p-5">
                  <button
                    type="button"
                    onClick={handleContinue}
                    className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  >
                    Continuer
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            // Section du formulaire d'inscription
            <motion.div
              key="registration-form"
              variants={formAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="my-5 w-5/12 mx-auto text-start">
                <h2 className=" font-medium text-2xl text-orange-500 mb-10 text-center">
                  Complétez vos informations
                </h2>
                {/* Champs du formulaire */}
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nom(s) <span className="text-red-600 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="PECKOUET-BINOMBO"
                      required
                    />
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <label
                      htmlFor="prenom"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Prénom(s) <span className="text-red-600 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Paul Emile"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Adresse e-mail <span className="text-red-600 font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="apeckouet@gmail.com"
                      required
                    />
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Téléphone <span className="text-red-600 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="+24104117764"
                      required
                    />
                  </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Photo de profil
                    </label>
                    <input
                      type="file"
                      id="profil"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                    />
                  </div>
                <div className="">
                  <div className="relative z-0 w-full mb-5 group">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mot de passe <span className="text-red-600 font-bold">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="••••••••••••"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="w-5/12 m-auto my-5 flex items-center justify-between p-5">
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Retour
                </button>

                <button
                  type="button"
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Créer mon compte
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Register;

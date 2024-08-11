import React from "react";
import Navbar from "../../Components/navbar/navbar";
import "../../css/besoin.css"

function Besoin() {
  return (
    <div>
      <Navbar />

      <div className="shadow-lg w-4/12 p-10 rounded-md absolute top-1/2 left-1/2 box-center">
        <h2 className=" font-medium text-2xl text-center text-orange-500  mb-5">
          Quel est votre besoin ?
        </h2>
        <form action="">
          <div className="text-gray-500 font-medium flex flex-col mb-3">
            <span className="mb-1">Titre de votre besoin</span>
            <input
              type="text"
              name=""
              id=""
              className="my-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div className="text-gray-500  font-medium flex flex-col mb-3">
            <span className="mb-1">Détaillez votre besoin</span>
            <textarea
              id="message"
              rows="4"
              className="bg-gray-50 block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 mb-2"
              placeholder="Détaillez ici votre besoin et vos attentes..."
            ></textarea>
          </div>

          <div className="text-gray-500 font-medium flex flex-col mb-5">
            <label
              htmlFor="budget"
              className=""
            >
              Quel est votre budget ?
            </label>
            <select
              id="budget"
              className=" bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
              
              <option value="Moins de 50 000 Fcfa">Moins de 50 000 Fcfa</option>
              <option value="50 000 à 100 000 Fcfa">50 000 à 100 000 Fcfa</option>
              <option value="100 000 à 150 000 Fcfa">100 000 à 150 000 Fcfa</option>
              <option value="150 000 à 200 000 Fcfa">150 000 à 200 000 Fcfa</option>
              <option value="Plus de 200 000">Plus de 200 000</option>
            </select>
          </div>

          <div className="flex items-center mt-10">
            <button
              type="button"
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Besoin;

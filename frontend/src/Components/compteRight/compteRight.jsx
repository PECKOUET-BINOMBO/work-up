import React from "react";
import {Link} from "react-router-dom"

function CompteRight() {
  return (
    <div className="flex flex-col w-9/12">
      <div className="w-10/12 mb-4 inline-block">
        <div className="flex flex-col">
          <div className="flex flex-col p-5 bg-gray-100 w-full rounded-md">
            <h3 className="text-orange-500 font-bold text-lg">Mes canditdatures</h3>
            <ul>
                <li>Candidature 1</li>
                <li>Candidature 2</li>
                <li>Candidature 3</li>
                <li>Candidature 4</li>
            </ul>

            <div className="text-center mt-10">
                ajouter formulaire de mise à jour d'informations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompteRight;

import React from "react";

function CompteLeft() {
  return (
    <div className="bg-gray-100 p-4 me-5 w-3/12 rounded">
      <div className="w-68">
        <div>
          <div className="card mb-5">
            <div className="img border-2 border-orange-400"></div>
          </div>
          <div>
            <p className="font-medium text-sm text-orange-400">
              PECKOUET-BINOMBO
            </p>
            <p className="font-medium text-sm text-orange-400">Paul Emile</p>
            <p className="text-xs font-medium text-gray-400">
              Développeur Fullstack
            </p>
            
          </div>
        </div>
        <hr className="my-10 shadow" />

        <div className="mb-5">
          <p className="mb-1 font-bold text-gray-500">Mon statut</p>
          <p className="text-xs font-medium text-gray-400">Prestataire</p>
        </div>

        <div className="mb-5">
          <p className="mb-1 font-bold text-gray-500">Mes compétences</p>

          <ul>
            <li className="mb-1 text-xs font-medium text-gray-400">HTML/CSS</li>
            <li className="mb-1 text-xs font-medium text-gray-400">
              JavaScript
            </li>
            <li className="mb-1 text-xs font-medium text-gray-400">
              Tailwind Css
            </li>
            <li className="mb-1 text-xs font-medium text-gray-400">
              Bootstrap
            </li>
            <li className="mb-1 text-xs font-medium text-gray-400">Laravel</li>
            <li className="mb-1 text-xs font-medium text-gray-400">PHP</li>
            <li className="mb-1 text-xs font-medium text-gray-400">React Js</li>
          </ul>
        </div>

        <div className="mb-5">
          <p className="mb-1 font-bold text-gray-500">Mes documents</p>

          <ul>
            <li className="mb-1 text-xs font-medium text-gray-400">CV-PECKOUET.PDF</li>
          </ul>
        </div>

        <div className="mb-10">
          <p className="mb-1 font-bold text-gray-500">Mes informations</p>
          <p className="mb-1 font-medium text-sm text-orange-400">Nom(s) :</p>
          <p className="mb-1 text-xs font-medium text-gray-400">
            PECKOUET-BINOMBO
          </p>
          <p className="mb-1 font-medium text-sm text-orange-400">
            Prénom(s) :
          </p>
          <p className="mb-1 text-xs font-medium text-gray-400">Paul Emile</p>
          <p className="mb-1 font-medium text-sm text-orange-400">
            Adresse mail :
          </p>
          <p className="mb-1 text-xs font-medium text-gray-400">
            apeckouet@gmail.com
          </p>
          <p className="mb-1 font-medium text-sm text-orange-400">
            Téléphone :
          </p>
          <p className="mb-1 text-xs font-medium text-gray-400">
            (241) 04117764
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompteLeft;

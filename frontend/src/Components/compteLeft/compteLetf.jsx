import React from "react";

function CompteLeft() {
  return (
    <div className="bg-gray-100 p-4 me-5 w-3/12 rounded">
      <div className="w-68">
        <div>
          <p>PECKOUET-BINOMBO</p>
          <p>Paul Emile</p>
          <p>Développeur Fullstack</p>
        </div>
        <hr className="my-10" />

        <div className="mb-10">
          <p className="mb-1 font-bold">Mon profil</p>
          <p>Prestataire</p>
        </div>

        <div className="mb-10">
          <p className="mb-1 font-bold">Compétences</p>
          <p>
            <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Tailwind Css</li>
                <li>Bootstrap</li>
                <li>Laravel</li>
                <li>PHP</li>
                <li>React Js</li>
            </ul>
          </p>
        </div>

        <div className="mb-10">
          <p className="mb-1 font-bold">Mes informations</p>
          <p>Nom(s) :</p>
          <p>PECKOUET-BINOMBO</p>
          <p>Prénom(s) :</p>
          <p>Paul Emile</p>
          <p>Adresse mail :</p>
          <p>apeckouet@gmail.com</p>
          <p>Téléphone :</p>
          <p>(241) 04117764</p>
        </div>
      </div>
    </div>
  );
}

export default CompteLeft;

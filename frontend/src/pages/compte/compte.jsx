import React from "react";
import Navbar from "../../Components/navbar/navbar";
import CompteLeft from "../../Components/compteLeft/compteLetf";
import CompteRight from "../../Components/compteRight/compteRight";


function Compte() {
  return (
    <div>
      <Navbar />
      <div className="py-10 px-5 content-center w-11/12 mx-auto">
        <div className="flex mb-5">
            <CompteLeft />
            <CompteRight />
        </div>
      </div>
    </div>
  );
}

export default Compte;

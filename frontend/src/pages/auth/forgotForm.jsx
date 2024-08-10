import React from "react"
import Navbar2 from "../../Components/navbar/navbar2";
import "../../css/auth.css";

function forgotForm() {
    return (
      <div>
        <Navbar2 />
        <div className="shadow-lg w-4/12 mx-auto p-10 rounded-md absolute top-1/2 left-1/2 box-center">
          <div className="my-5">
            <h2 className=" font-medium text-2xl text-center text-orange-500  mb-5">
              Mot de passe oublié ?
            </h2>
            <p className="text-gray-400 font-medium text-xs">Saisissez l'email utilisé lors de votre inscription afin de renouveler votre mot de passe.</p>
          </div>
  
          <form action="" className="">
            <div className="">
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="apeckouet@gmail.com"
                  required
                />
              </div>
            </div>
            
            <div className="my-10 flex items-center justify-center">
              <button
                type="button"
                className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default forgotForm;
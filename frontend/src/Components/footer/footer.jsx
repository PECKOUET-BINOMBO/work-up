import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-black dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="#" className="flex items-center">
                {/* <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                /> */}
                <span className="self-center text-xl font-semibold whitespace-nowrap border-2 border-white text-white p-1">
                  WORK UP
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      Comment ça marche
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      A propos de nous
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="#"
                      className="hover:underline "
                    >
                      Conditions d'utilisation
                    </Link>
                  </li>
                  <li>
                    <Link to="#"
                      className="hover:underline"
                    >
                      Politique de confidentialité
                    </Link>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <Link to="#" className="hover:underline">
                Work up
              </Link>
              . Tous droits réservés.
            </span>
           
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

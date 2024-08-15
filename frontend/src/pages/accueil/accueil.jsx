import React from "react";
import Navbar from "../../Components/navbar/navbar";
import Search from "../../Components/search/search";
import Pub from "../../Components/pub/pub";
import Footer from "../../Components/footer/footer";
import Pagination from "../../Components/pagination/pagination";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div>
      <Navbar />
      <Search />
      <div className="py-10 px-5 content-center w-11/12 mx-auto">
        <div className="flex mb-5">
          <Pub />

          <div className="flex flex-col">
            <Link to="/mission" className="w-10/12 mb-4 inline-block">
              <div className="flex flex-col">
                <div className="flex flex-col p-5 bg-gray-100 w-full rounded-md">
                  <h3 className="text-orange-500 font-bold text-lg">
                    Répétiteur
                  </h3>
                  <span className="text-gray-400 font-medium text-xs">
                    50 000 Fcfa
                  </span>
                  <p className="my-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Harum voluptatem maxime eveniet maiores cumque fugit iure
                    natus sapiente aliquam, rerum dolore magni. Deleniti,
                    distinctio voluptates. Fuga fugit in iusto quasi!
                  </p>
                  <span className="text-gray-400 font-medium text-xs">
                    Il y a 1 jour par Jonathan
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/mission" className="w-10/12 mb-4 inline-block">
              <div className="flex flex-col">
                <div className="flex flex-col p-5 bg-gray-100 w-full rounded-md">
                  <h3 className="text-orange-500 font-bold text-lg">
                    Répétiteur
                  </h3>
                  <span className="text-gray-400 font-medium text-xs">
                    50 000 Fcfa
                  </span>
                  <p className="my-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Harum voluptatem maxime eveniet maiores cumque fugit iure
                    natus sapiente aliquam, rerum dolore magni. Deleniti,
                    distinctio voluptates. Fuga fugit in iusto quasi!
                  </p>
                  <span className="text-gray-400 font-medium text-xs">
                    Il y a 1 jour par Jonathan
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/mission" className="w-10/12 mb-4 inline-block">
              <div className="flex flex-col">
                <div className="flex flex-col p-5 bg-gray-100 w-full rounded-md">
                  <h3 className="text-orange-500 font-bold text-lg">
                    Répétiteur
                  </h3>
                  <span className="text-gray-400 font-medium text-xs">
                    50 000 Fcfa
                  </span>
                  <p className="my-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Harum voluptatem maxime eveniet maiores cumque fugit iure
                    natus sapiente aliquam, rerum dolore magni. Deleniti,
                    distinctio voluptates. Fuga fugit in iusto quasi!
                  </p>
                  <span className="text-gray-400 font-medium text-xs">
                    Il y a 1 jour par Jonathan
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/mission" className="w-10/12 mb-4 inline-block">
              <div className="flex flex-col">
                <div className="flex flex-col p-5 bg-gray-100 w-full rounded-md">
                  <h3 className="text-orange-500 font-bold text-lg">
                    Répétiteur
                  </h3>
                  <span className="text-gray-400 font-medium text-xs">
                    50 000 Fcfa
                  </span>
                  <p className="my-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Harum voluptatem maxime eveniet maiores cumque fugit iure
                    natus sapiente aliquam, rerum dolore magni. Deleniti,
                    distinctio voluptates. Fuga fugit in iusto quasi!
                  </p>
                  <span className="text-gray-400 font-medium text-xs">
                    Il y a 1 jour par Jonathan
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/mission" className="w-10/12 mb-4 inline-block">
              <div className="flex flex-col">
                <div className="flex flex-col p-5 bg-gray-100 w-full rounded-md">
                  <h3 className="text-orange-500 font-bold text-lg">
                    Répétiteur
                  </h3>
                  <span className="text-gray-400 font-medium text-xs">
                    50 000 Fcfa
                  </span>
                  <p className="my-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Harum voluptatem maxime eveniet maiores cumque fugit iure
                    natus sapiente aliquam, rerum dolore magni. Deleniti,
                    distinctio voluptates. Fuga fugit in iusto quasi!
                  </p>
                  <span className="text-gray-400 font-medium text-xs">
                    Il y a 1 jour par Jonathan
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/mission" className="w-10/12 mb-4 inline-block">
              <div className="flex flex-col">
                <div className="flex flex-col p-5 bg-gray-100 w-full rounded-md">
                  <h3 className="text-orange-500 font-bold text-lg">
                    Répétiteur
                  </h3>
                  <span className="text-gray-400 font-medium text-xs">
                    50 000 Fcfa
                  </span>
                  <p className="my-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Harum voluptatem maxime eveniet maiores cumque fugit iure
                    natus sapiente aliquam, rerum dolore magni. Deleniti,
                    distinctio voluptates. Fuga fugit in iusto quasi!
                  </p>
                  <span className="text-gray-400 font-medium text-xs">
                    Il y a 1 jour par Jonathan
                  </span>
                </div>
              </div>
            </Link>

            
          </div>
        </div>
        <Pagination />
      </div>

      <Footer />
    </div>
  );
}

export default Accueil;

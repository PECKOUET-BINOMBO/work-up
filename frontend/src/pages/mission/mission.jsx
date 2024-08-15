import React from "react";
import Navbar from "../../Components/navbar/navbar";
import Pub from "../../Components/pub/pub";


function Mission() {
  return (
    <div>
      <Navbar />
      <div className="py-10 px-5 content-center w-11/12 mx-auto">
        <div className="flex mb-5">
          <Pub />

          <div className="flex flex-col">
            <div className="w-10/12 mb-4">
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
                  <div className="flex items-center justify-end">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-md mt-2 font-medium">
                      Postuler
                    </button>
                  </div>
                </div>

                <div className="flex flex-col p-5 bg-gray-100 w-full rounded-md mt-10">
                  <h3 className="text-orange-500 font-bold text-base">
                    Postulez ici
                  </h3>
                  <span className="text-gray-400 font-medium text-xs mb-4">
                    Vos documents
                  </span>
                  <form action="">
                    <div className="mb-5">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="file_input"
                      >
                        Lettre de motivation{" "}
                        <span className="font-bold text-red-600">*</span>
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                      />
                    </div>

                    <div className="mb-10">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="file_input"
                      >
                        Votre CV{" "}
                        <span className="font-bold text-red-600">*</span>
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                      />
                    </div>
                    <div className="mb-5 flex items-center justify-between">
                      <button
                        type="button"
                        className="text-orange-500 bg-white border border-gray-300 focus:outline-none hover:bg-orange-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                        Retour
                      </button>
                      <button
                        type="submit"
                        className="focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;

import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../pagination/pagination";

function CompteRight() {
  return (
    <div className="flex flex-col w-9/12">
      <div className="w-full mb-4 inline-block">
        <div className="flex flex-col">
          <div className="flex flex-col p-5 bg-gray-100 w-full rounded-md">
            <h3 className="text-orange-400 font-bold text-lg mb-5">
              Mes canditdatures{" "}
              <sup className="text-sm text-gray-400 font-medium">(4)</sup>
            </h3>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-all-search"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Titres
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Descriptions
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Prix
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="flex items-center px-6 py-4">
                      <Link
                        to="#"
                        className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                      >
                        Voire
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3"
                      >
                        Modifier
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Supprimer
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-2"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-2"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td className="flex items-center px-6 py-4">
                      <Link
                        to="#"
                        className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                      >
                        Voire
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3"
                      >
                        Modifier
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Supprimer
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-3"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-3"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="flex items-center px-6 py-4">
                      <Link
                        to="#"
                        className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                      >
                        Voire
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3"
                      >
                        Modifier
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Supprimer
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-3"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-3"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple Watch
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4">Watches</td>
                    <td className="flex items-center px-6 py-4">
                      <Link
                        to="#"
                        className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                      >
                        Voire
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3"
                      >
                        Modifier
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Supprimer
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-3"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-3"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple iMac
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">PC</td>
                    <td className="flex items-center px-6 py-4">
                      <Link
                        to="#"
                        className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                      >
                        Voire
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3"
                      >
                        Modifier
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Supprimer
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Pagination />
            </div>

            <div className="mb-5">
              <h3 className="text-orange-400 font-bold text-lg mb-5">
                Mon profil{" "}
              </h3>

              <form action="#" className="shadow-md sm:rounded-lg p-5 bg-white">
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nom(s)
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
                      Prénom(s)
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
                  <div className="relative z-0 w-full mb-5 group">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Téléphone
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

                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <label
                      htmlFor="countroleries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Rôle
                    </label>
                    <select
                      id="role"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="client">Client</option>
                      <option value="prestataire">Prestataire</option>
                    </select>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="••••••••••••"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Supprimer mon compte
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Mettre à jour
                  </button>
                </div>
              </form>
            </div>
            {/* ****************************************************************************** */}
            <h3 className="text-orange-400 font-bold text-lg mb-5">
              Mes besoins{" "}
              <sup className="text-sm text-gray-400 font-medium">(10)</sup>
            </h3>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-all-search"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Titres
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Descriptions
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Prix
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Candidatures
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="flex items-center px-6 py-4">
                      <Link
                        to="#"
                        className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                      >
                        Voire
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3"
                      >
                        Modifier
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Supprimer
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-2"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-2"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td className="px-6 py-4">No</td>
                    <td className="flex items-center px-6 py-4">
                      <Link
                        to="#"
                        className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                      >
                        Voire
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3"
                      >
                        Modifier
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Supprimer
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-3"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-3"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="flex items-center px-6 py-4">
                      <Link
                        to="#"
                        className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                      >
                        Voire
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3"
                      >
                        Modifier
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Supprimer
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-3"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-3"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple Watch
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4">Watches</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="flex items-center px-6 py-4">
                      <Link
                        to="#"
                        className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                      >
                        Voire
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3"
                      >
                        Modifier
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Supprimer
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-3"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-3"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple iMac
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">PC</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="flex items-center px-6 py-4">
                      <Link
                        to="#"
                        className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                      >
                        Voire
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-3"
                      >
                        Modifier
                      </Link>
                      <Link
                        to="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Supprimer
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Pagination />
            </div>
            <div className="mb-5">
              <h3 className="text-orange-400 font-bold text-lg mb-5">
                Mon profil{" "}
              </h3>

              <form action="#" className="shadow-md sm:rounded-lg p-5 bg-white">
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nom(s)
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
                      Prénom(s)
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
                  <div className="relative z-0 w-full mb-5 group">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Téléphone
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

                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <label
                      htmlFor="countroleries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Rôle
                    </label>
                    <select
                      id="role"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="client">Client</option>
                      <option value="prestataire">Prestataire</option>
                    </select>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="••••••••••••"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Supprimer mon compte
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Mettre à jour
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompteRight;

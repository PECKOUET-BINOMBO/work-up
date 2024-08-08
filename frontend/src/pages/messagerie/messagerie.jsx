import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/navbar/navbar";

function Messagerie() {
  return (
    <div>
      <Navbar />
      <div className="py-10 px-5 content-center w-11/12 mx-auto">
        <div className="flex mb-5">
          <div className="bg-gray-100 p-3  w-4/12 rounded">
            <div className="bg-gray-200 w-68 px-2 h-12 mb-1 rounded flex items-center justify-between font-medium">
              <div>
                <h6 className="text-orange-500 font-medium text-sm">
                  Répétiteur
                </h6>
                <span className="text-xs inline-block overflow-hidden">Oui bonjour Lorem ipsum dolor sit amet consectetur...</span>
              </div>
              <span className="text-xs">22:48</span>
            </div>
            <div className=" w-68 h-12 mb-1 rounded flex items-center justify-between font-medium">
             <div>
             <h6 className="text-orange-500 font-medium text-sm">
                Répétiteur
              </h6>
              <span className="text-xs inline-block overflow-hidden">Oui bonjour Lorem ipsum dolor sit amet consectetur...</span>
             </div>
              <span className="text-xs">22:48</span>
            </div>
          </div>
          <div className="w-10/12">
            <div className="flex flex-col">
              <div className="flex flex-col p-5 bg-white border-2 w-full ">
                <div className="w-full flex items-center justify-start">
                  <div className="rounded-lg bg-orange-500 text-white font-base p-4 w-1/2 mb-5">
                    <p>Bonjour !</p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-end">
                  <div className="rounded-lg bg-gray-100 text-gray-900 font-base p-4 w-1/2 mb-10">
                    <p className="text-end">Oui bonjour !</p>
                  </div>
                </div>
                <div className="w-full flex items-center relative">
                  <textarea
                    name=""
                    id=""
                    rows="2"
                    className="w-full border border-orange-300 p-2 rounded-md"
                    placeholder="Message"
                    style={{ resize: "none" }}></textarea>
                  <svg
                    className="absolute right-0"
                    width="37px"
                    height="37px"
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(1, 0, 0, 1, 0, 0)"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#4b0606"
                      strokeWidth="0.336"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                        stroke="#FF5A1F"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messagerie;

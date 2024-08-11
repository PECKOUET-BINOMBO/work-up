import React from "react";
import pub1 from "../../img/ads1.png";
import pub2 from "../../img/ads2.png";
import pub3 from "../../img/ads3.png";
import pub4 from "../../img/ads4.png";
import "../../css/pub.css"

function Pub() {
  return (
    <div className="bg-gray-100 p-3 me-5 w-4/12 rounded">
      <div className="bg-gray-300 w-68 mb-2 box-img-pub">
        <img src={pub1} alt="pub1" />
      </div>
      <div className="bg-gray-300 w-68 mb-2">
      <img src={pub2} alt="pub2" />
      </div>
      <div className="bg-gray-300 w-68 mb-2">
      <img src={pub3} alt="pub3" />
      </div>
      <div className="bg-gray-300 w-68 mb-2">
      <img src={pub4} alt="pub4" />
      </div>
    </div>
  );
}

export default Pub;

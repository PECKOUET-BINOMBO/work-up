import "../css/App.css";
import { Route, Routes } from "react-router-dom";
import Accueil from "../pages/accueil/accueil";
import Mission from "../pages/mission";
import Messagerie from "../pages/messagerie/messagerie";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/mission" element={<Mission />} />
        {/* <Route path="/mission/:id" element={<Mission />} /> */}
        <Route path="/messagerie" element={<Messagerie />} />
      </Routes>
    </div>
  );
}

export default App;

import "../css/App.css";
import { Route, Routes } from "react-router-dom";
import Accueil from "../pages/accueil/accueil";
import Mission from "../pages/mission";
import Messagerie from "../pages/messagerie/messagerie";
import Compte from "../pages/compte/compte";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import ForgotForm from "../pages/auth/forgotForm";
import Besoin from "../pages/besoins/besoin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/mission" element={<Mission />} />
        {/* <Route path="/mission/:id" element={<Mission />} /> */}
        <Route path="/messagerie" element={<Messagerie />} />
        <Route path="/compte" element={<Compte />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-form" element={<ForgotForm />} />
        <Route path="/besoin" element={<Besoin />} />
      </Routes>
    </div>
  );
}

export default App;

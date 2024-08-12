// routes.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { Agendamento } from "./Pages/Agendamento";
import { Profissionais } from "./pages/Profissionais";
import { Agenda } from "./Pages/Agenda";
import { NotFound } from "./pages/NotFound";
import { Admin } from "./Pages/Admin";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/profissionais" element={<Profissionais />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;

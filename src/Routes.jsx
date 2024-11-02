// routes.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import { Home } from "./Pages/Home";
import { Agendamento } from "./Pages/Agendamento";

import { Agenda } from "./Pages/Agenda";
import { NotFound } from "./pages/NotFound";
import { Admin } from "./Pages/Admin";
import { RegistroHorarios } from "./Pages/RegistrosdeHorarios";
import { AgendasAbertas } from "./Pages/agendasAbertas";

import { Protect } from "./Components/Protect";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/agendasAbertas" element={<AgendasAbertas />} />

        <Route
          path="/adminregistros"
          element={
            <Protect>
              <RegistroHorarios />
              <AgendasAbertas />
            </Protect>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;

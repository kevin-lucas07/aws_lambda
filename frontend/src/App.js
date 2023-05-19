import {Routes, Route } from "react-router-dom";

import Home from "./pages/section/Home";

import PacienteList from "./pages/paciente/PacienteList"
import PacienteCreate from "./pages/paciente/PacienteCreate"
import PacienteEdit from "./pages/paciente/PacienteEdit"
import PacienteShow from "./pages/paciente/PacienteShow"

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/paciente" element={<PacienteList />} />
        <Route path="/paciente/create" element={<PacienteCreate />} />
        <Route path="/paciente/edit/:id" element={<PacienteEdit />} />
        <Route path="/paciente/show/:id" element={<PacienteShow />} />
    </Routes>
  )
}
export default App
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/cita">Contactos</Link></li>
        <li><Link to="/laboratorio">Quienes Somos</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
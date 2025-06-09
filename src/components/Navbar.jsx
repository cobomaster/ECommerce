import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return(
        <nav className='navbar'>
            <Link to="/"> Inicio </Link>
            <Link to="/productos"> Productos </Link>
            <Link to="/carrito"> Carrito </Link>
        </nav>
    );
}

export default Navbar;
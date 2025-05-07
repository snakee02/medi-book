import Navbar from './Navbar.jsx';
import Offcanvas from './Offcanvas.jsx';
import { onSignOut } from '../Firebase/client.js';
import useUsuario from '../hooks/useUsuario.js';


const Home = () => {
    
    const usuario = useUsuario();

    return (
    <>
        <Navbar />
        <div className="container mt-5 pt-4">
            <h1>Bienvenido {usuario}</h1>
            <button onClick={ onSignOut } className="button">Cerrar sesión</button>
        </div>
        <div>
        <button className="btn btn-primary  d-block mx-auto rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight">AGENDAR UNA CITA</button>
        <Offcanvas />
        </div>
    </>
    );
}


export default Home;
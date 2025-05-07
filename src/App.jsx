import useUsuario from './hooks/useUsuario.js';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // importa los estilos CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Form from './components/Formulario.jsx';

function App() {
  const usuario = useUsuario();


  return(
    <Routes>
      <Route path="/" element={usuario ? <Home /> : <Login />} />
      <Route path="/Formulario" element={<Form />} />
    </Routes>
 )
}

export default App //exportar por defecto la función App
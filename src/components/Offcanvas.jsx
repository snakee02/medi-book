import { Link } from 'react-router-dom';

const Offcanvas = () => {
    return (
        <div className="offcanvas offcanvas-end mioffcanvas text-center" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">¿De que servicio médico deseas agendar una cita?</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Link to="/Formulario" className="boton-offcanvas btn rounded-pill btn-outline-primary mb-3" state={{ especialidad: "Medicina General"}}>Medicina General</Link>
                    <Link to="/Formulario" className="boton-offcanvas btn rounded-pill btn-outline-primary mb-3" state={{ especialidad: "Especialidades Médicas Avanzadas"}}>Especialidades Médicas Avanzadas</Link>
                    <Link to="/Formulario" className="boton-offcanvas btn rounded-pill btn-outline-primary mb-3" state={{ especialidad: "Psicología y Bienestar Mental"}}>Psicología y Bienestar Mental</Link>
                    <Link to="/Formulario" className="boton-offcanvas btn rounded-pill btn-outline-primary mb-3" state={{ especialidad: "Atención Pediatrica"}}>Atención Pediatrica</Link>
                    <Link to="/Formulario" className="boton-offcanvas btn rounded-pill btn-outline-primary mb-3" state={{ especialidad: "Salud Femenina"}}>Salud Femenina</Link>
                    <Link to="/Formulario" className="boton-offcanvas btn rounded-pill btn-outline-primary mb-3" state={{ especialidad: "Salud Masculina"}}>Salud Masculina</Link>
                    <Link to="/Formulario" className="boton-offcanvas btn rounded-pill btn-outline-primary mb-3" state={{ especialidad: "Cuidado Dental"}}>Cuidado Dental</Link>
                    <Link to="/Formulario" className="boton-offcanvas btn rounded-pill btn-outline-primary mb-3" state={{ especialidad: "Terapias y Rehabilitación Física"}}>Terapias y Rehabilitación Física</Link>
                    <Link to="/Formulario" className="boton-offcanvas btn rounded-pill btn-outline-primary mb-3" state={{ especialidad: "Exámenes Médicos y Laboratorio"}}>Exámenes Médicos y Laboratorio</Link>
                    <Link to="/Formulario" className="boton-offcanvas btn rounded-pill btn-outline-primary mb-3" state={{ especialidad: "Otras Especialidades"}}>Otras Especialidades</Link>
                </div>
        </div>
    

)};

export default Offcanvas

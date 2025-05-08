import { useLocation } from "react-router-dom"


const Form = () => {
    const location = useLocation(); //location para acceder a todo el dato de 'state'
    const especialidad = location.state?.especialidad || ""; //en 'state' se encuentra la especialidad y evalua con '?' cual se escogió.

   
  return (
    <section className="container mt-5 w-50">
        <div className="form-control mt-4">
            <h1>Agendar Cita</h1>
            <h2>Especialidad: {especialidad}</h2> 
            <div className="form-group mt-5">
                <label htmlFor="email">RUT: </label>
                <input type="text" placeholder="Ingresa tu RUT" className="d-flex"required />
            </div>
            <div className="form-group mt-4">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" placeholder="Ingresa tu Nombre y Apellido" className="d-flex"required />
            </div>
            <div>
                <label htmlFor="fecha" className="mt-3">Fecha:</label>
                <input type="date" className="d-flex" required />
            </div>
            <div>
                <label htmlFor="hora" className="mt-3">Horario:</label>
                <select className="form-select">
                <option value=""></option>
                    <option>09:00 AM</option>
                    <option>09:30 AM</option>
                    <option>10:00 AM</option>
                    <option>10:30 AM</option>
                    <option>11:00 AM</option>
                    <option>11:30 AM</option>
                    <option>12:00 PM</option>
                    <option>13:00 PM</option>
                    <option>13:30 PM</option>
                    <option>14:00 PM</option>
                    <option>14:30 PM</option>
                    <option>15:00 PM</option>
                    <option>15:30 PM</option>
                    <option>16:00 PM</option>
                    <option>16:30 PM</option>
                    <option>17:00 PM</option>
                    <option>17:30 PM</option>
                    <option>18:00 PM</option>
                    <option>18:30 PM</option>
                    <option>19:00 PM</option>
                    <option>19:30 PM</option>
                    <option>20:00 PM</option>
                    <option>20:30 PM</option>
                    <option>21:00 PM</option>
                </select>
            </div>
            <button type="submit" className="button">ENVIAR</button>
        </div>
    </section>
    )
}

export default Form

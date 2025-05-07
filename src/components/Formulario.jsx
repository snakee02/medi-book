const Form = () => {
  return (
    <section className="container mt-5 w-50">
        <div className="form-control mt-4">
            <h1>Agendar Cita</h1>
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
                <input type="time" className="d-flex" required />
            </div>
            <button type="submit" className="button">ENVIAR</button>
        </div>
    </section>
    )
}

export default Form

import { useRef, useState } from "react";

const NoControl = () => {
    const form = useRef(null)
    const [error, setError] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        // este apartado captura los datos de un formulario
        const data = new FormData(form.current);

        // destructuración
        const { title, description, state} = Object.fromEntries([...data.entries()]);

        // console.log(title, description, state);

        // este apartado es validar los datos del formulario
        // trim() es para detectar que hay espacios en blanco y que estan vacios
        if (!title.trim() || !description.trim() || !state.trim()) return setError('llena todo los campos');

        // Enviar los datos
        console.log(title, description, state);
    };

    return (
    <form onSubmit={handleSubmit} ref={form}>
        <input 
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        defaultValue='futbol #5'
        />

        <textarea
        className="form-control mb-2" 
        placeholder="Ingrese descripción"
        name="description"
        defaultValue='delantero #9'
        />

        <select className="form-select mb-2" name="state" defaultValue='completado'>
            <option value="pendiente">Pendiente</option>
            <option value="completado">Completado</option>
        </select>

        <button className="btn btn-primary" type="submit">Procesar</button>

        {
            error !== '' && error
        }
    </form>
    );
};

export default NoControl;
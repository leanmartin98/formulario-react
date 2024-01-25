import Swal from 'sweetalert2'
import { useState } from "react";

const Formulario = ( {addTodo} ) => {
    // este pedazo de codigo es un objeto
    const [todo, setTodo] = useState ({
        title: '',
        description: '',
        state: 'pendiente',
        priority: false
    });

    const [error, setError] = useState(false)

    // destructuración
    const {title, description, state, priority } = todo;
    // const [title, setTitle] = useState('Futbol 5')
    // const [description, setDescription] = useState('Casa amarilla')
    // const [state, setState] = useState('pendiente')

    const handleChange = (e) => {
        const {name, type, checked, value} = e.target;

        setTodo((prev) => ({
            ...prev, 
            [name]: type === 'checkbox' ? checked : value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim() || !description.trim()) {
            return Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Titulo y descripción obligatorios",
                  });
            // console.log('campos vacios');
    }

    addTodo({
        id: Date.now(),
        ...todo,
        state: state === 'completado'
    })

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Todo agregado",
        showConfirmButton: false,
        timer: 1500
      });
    // console.log(title, description, state);
};

    return (
    <div className="container mt-2">
       {error && <PintarError />} 
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
        />

        <textarea
        className="form-control mb-2" 
        placeholder="Ingrese descripción"
        name="description"
        value={description}
        onChange={handleChange}
        />

        <div className="form-check mb-2">
        <input 
        type="checkbox" 
        name="priority" 
        className="form-check-input" 
        id="inputCheck" 
        checked={priority}
        onChange={handleChange}
        />
        <label htmlFor="inputCheck">Dar prioridad</label>
        </div>

        <select 
        className="form-select mb-2" 
        name="state" 
        value={todo.state} 
        onChange={handleChange}>
            <option value="pendiente">Pendiente</option>
            <option value="completado">Completado</option>
        </select>

        <button className="btn btn-primary" type="submit">Agregar Todo</button>
    </form>
    </div>
    );
};
export default Formulario;
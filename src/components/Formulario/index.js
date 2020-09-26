import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

// Destructurin de props.crearTask, se hace directramente en los parentesis
const Formulario = ({createTask}) => {
    // Crear state en tasks
    const [task, updateTask] = useState({
        tarea: '',
        cliente: '',
        fecha: '',
        hora: '',
        descripcion: '',
    });
    //funcion que revisa los input
    const handleChange = (e) => {
        updateTask({
            ...task, // si no se agrega una copia del state original cada valor sobrescribe al anterior
            [e.target.name] : e.target.value
        })
    }

    const [error, handleError] = useState(false);

    const { tarea, cliente, fecha, hora, descripcion } = task;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //Validar
        if(tarea.trim() === '' || cliente.trim() === '' || fecha.trim() === '' || hora.trim() === '' || descripcion.trim() === '') {
            handleError(true) //En caso de que falle la validación el error pasa a ser true
            return; // evita que el codigo se siga ejecutandoo
        }
        //Eliminar el mensaje de error previo
        handleError(false)
        //Asignar ID
        task.id = uuidv4();
        // Crear Task
        createTask(task) //Esta funcion viene del componente padre APP

        // Reiniciar form
        updateTask({
            tarea: '',
            cliente: '',
            fecha: '',
            hora: '',
            descripcion: '',
        })
    }

    return ( 
        <>
            <h2 className="text-primary">Crear Tarea</h2>
            { error 
                ? <p className="alert alert-danger" role="alert">Todos los campos son obligatorios</p>
                : null 
            }
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre de la Tarea</label>
                    <input 
                        type="text"
                        name="tarea"
                        className="form-control"
                        placeholder="Nombre de la Tarea"
                        value={tarea}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Cliente</label>
                    <input 
                        type="text"
                        name="cliente"
                        className="form-control"
                        placeholder="Nombre del cliente"
                        value={cliente}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Fecha</label>
                        <input 
                            type="date"
                            name="fecha"
                            className="form-control"
                            value={fecha}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Hora</label>
                        <input 
                            type="time"
                            name="hora"
                            className="form-control"
                            value={hora}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Descripción</label>
                    <textarea 
                        className="form-control"
                        name="descripcion"
                        value={descripcion}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button 
                    type="submit"
                    className="btn btn-primary"
                >
                    Agregar Task
                </button>
            </form>
        </>
     );
}
//Documentar componentes con PROPTYPES

Formulario.propTypes = {
    crearTask: PropTypes.func
}

export default Formulario;
import React from 'react';
import PropTypes from 'prop-types';

const  Task = ({task, deleteTask}) => (
    <div className="card mb-4">
        <div className="card-header bg-secondary text-white">
            <ul className="d-flex justify-content-between list-unstyled m-0">
                <li>
                    <p className="mb-1"><b>Tarea:</b> <span>{task.tarea}</span></p>
                </li>
                <li>
                    <p className="mb-1"><b>Cliente:</b> <span>{task.cliente}</span></p>
                </li>
            </ul>
            <ul className="d-flex justify-content-between list-unstyled m-0">
                <li >
                    <p className="m-0"><b><i className="far fa-calendar-alt"></i></b> <span>{task.fecha}</span></p>
                </li>
                <li >
                    <p className="m-0"><b><i className="far fa-clock"></i></b> <span>{task.hora}</span> hrs.</p>
                </li>
            </ul>
        </div>
        <div className="card-body">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <p className="text-secondary m-0">Descripción:</p>
                </li>
                <li className="list-group-item">
                    <p className="m-0">{task.descripcion}</p>
                </li>
            </ul>
        </div>
        <div className="card-footer text-right">
            <button 
                className="btn btn-danger"
                onClick={() => deleteTask(task.id)}
            >
                Eliminar &times;
            </button>
        </div>
    </div>
)
//Documentar componentes con PROPTYPES

Task.propTypes = {
    task: PropTypes.object.isRequired,
    eliminarTask: PropTypes.func,

}


export default Task;
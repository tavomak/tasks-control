import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Task from './components/Task'

function App() {

  // Tasks en Local Storage
  let initialTasks = JSON.parse(localStorage.getItem('tasks'));
  if (!initialTasks) {
    initialTasks = [];
  }
  const [tasks, saveTasks] = useState(initialTasks);

  // se ejecuta cuando el componente esta listo o cuando el componente cambia
  // se le debe colocar un arreglo vacio al final si no se va a ejecutar cada vez
  // En el array vacio se listan las dependencias las cuales van a eterminar cuando el useefect cambia
  useEffect( () => {
    console.log('Se ejecutó algún cambio en las tasks')
    if(initialTasks){
      localStorage.setItem('tasks', JSON.stringify(tasks))
    } else {
      localStorage.setItem('tasks', JSON.stringify([]))
    }
  }, [tasks, initialTasks])
  
  const createTask = task => {
    saveTasks([
      ...tasks,
      task
    ])
  }
  // Funcion que elimina una task por su ID
const deleteTask = id => {
  const newTasks = tasks.filter(task => task.id !== id)
  saveTasks( newTasks )
}

// Condicional
//console.log(tasks.length);
const titulo = tasks.length === 0 ? '¡Perfecto! No tienes tareas pendientes' : 'Listado de tareas pendientes'
let randomLeters = Math.random().toString(20).substr(2, 6)
  return (
    <>
    <div className="container full-h d-flex align-items-center">
      <div className="row w-100">
        <div className="col-md-5">
          <Formulario 
            createTask={createTask}
          />
        </div>
        <div className="col-md-7">
          <p className="text-center text-primary">{titulo}</p>
          {tasks.length === 0
            ?
            <div className="text-center">
              <img className="rounded-circle" src={`https://api.adorable.io/avatars/285/${randomLeters}.png`} alt="No hay productos en el carrito"/>
            </div>
            :
              tasks.map(task => (
                <Task 
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                />
              ))
          }
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

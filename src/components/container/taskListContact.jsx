import React from 'react'
import TaskContacto from '../pure/taskContacto'
import { Contacto } from '../../models/Contacto'

const TaskListContact = () => {
    const defaultContact = new Contacto("Elvio","Galeano","elvio.galeano827@gmail.com",false)
    // const defaultContact = {
    //   Nombre: "Elvito",
    //   Apellido: "Galeano",
    //   Email: "asddsa",
    //   Conectado: false
    // }
  return (
    <div>
        <h1>Your task:</h1>
        <TaskContacto contact ={defaultContact}></TaskContacto>
    </div>
  )
}



export default TaskListContact
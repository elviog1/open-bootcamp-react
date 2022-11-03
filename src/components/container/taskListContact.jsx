import React from 'react'
import TaskContacto from '../pure/taskContacto'
import { Contacto } from '../../models/Contacto'

const TaskListContact = props => {
    const defaultContact = new Contacto("Elvio","Galeano","elvio.galeano827@gmail.com",false)
  return (
    <div>
        <h1>Your task:</h1>
        <TaskContacto contact ={defaultContact}></TaskContacto>
    </div>
  )
}



export default TaskListContact
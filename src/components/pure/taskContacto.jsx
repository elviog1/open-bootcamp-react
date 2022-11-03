import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/Contacto'

const TaskContacto = ({contact}) => {
  const [conectado,setConectado] = useState(contact.Conectado)
  console.log(conectado)
  return (
    <div>
        <h2>Nombre: {contact.Nombre}</h2>
        <h2>Apellido: {contact.Apellido}</h2>
        <h2>Email: {contact.Email}</h2>
        <h2> {!conectado ? "Contacto en Linea" : "Contacto No Disponible"}</h2>
        <button onClick={()=> setConectado(!conectado)}>{conectado ? "Conectar" : "Desconectar"}</button>
    </div>
  )
}

TaskContacto.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
}

export default TaskContacto
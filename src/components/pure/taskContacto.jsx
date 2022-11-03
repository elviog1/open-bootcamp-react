import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/Contacto'

const TaskContacto = ({contact}) => {
  return (
    <div>
        <h2>Nombre: {contact.Nombre}</h2>
        <h2>Apellido: {contact.Apellido}</h2>
        <h2>Email: {contact.Email}</h2>
        <h2>Conectado: {contact.Conectado ? "Contacto en Linea" : "Contacto No Disponible"}</h2>
    </div>
  )
}

TaskContacto.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
}

export default TaskContacto
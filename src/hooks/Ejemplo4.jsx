import React from 'react'

export default function Ejemplo4(props) {
  return (
    <div>
        <h2>ejemplo children</h2>
        <h2>Nombre: {props.nombre}</h2>
        {props.children}
    </div>
  )
}

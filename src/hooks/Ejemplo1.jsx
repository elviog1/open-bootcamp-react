import React, { useState } from 'react'

export default function Ejemplo1() {
    const valorInicial = 0
    const personaInicial = {
        nombre : "Elvito",
        email : "elvito@gmail.com"
    }

     const [contador, setContador] = useState(valorInicial)
     const [persona, setPersona] = useState(personaInicial)

     function incrementar (){
        setContador(contador +1)
     }

     function actualizarPersona (){
        setPersona(
            {nombre: "pepe",
            email: "pepe@gmail.com"
        },
        )
     }
  return (
    <div>
        <h1>Ejemplo de useState: </h1>
        <h2>Contador: {contador}</h2>
        <h2>Persona: </h2>
        <h3>Nombre: {persona.nombre}</h3>
        <h3>Email: {persona.email}</h3>
        <button onClick={incrementar}>Incrementar contador</button>
        <button onClick={actualizarPersona}>Incrementar persona</button>
    </div>
  )
}

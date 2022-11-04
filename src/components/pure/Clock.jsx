import React, { useEffect, useState } from 'react'

export default function Clock() {

    const clockInitial = {
        fecha:  Date(),
        edad: 0,
        nombre: "elvito ",
        apellido: "galeano"
    }
    const [time, setTime] = useState(clockInitial)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime({
                fecha:  Date(),
                edad: time.edad +1,
                nombre: "elvito ",
                apellido: "galeano"
            })
        },1000)
        return ()=> clearInterval(interval)
    },[time.edad])

  return (
    <div>
        <h1>Hora actual: {time.fecha}</h1>
        <h1>Nombre : {time.nombre} {time.apellido}</h1>
        <h1>Edad: {time.edad}</h1>
    </div>
  )
}

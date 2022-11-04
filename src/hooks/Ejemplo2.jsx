import React, { useEffect, useRef, useState } from 'react'

export default function Ejemplo2() {
    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)
    const miRef = useRef()
    function incrementar1 (){
        setContador1(contador1+1)
    }
    function incrementar2 (){
        setContador2(contador2+1)
    }
    useEffect(()=>{
        console.log("first")
        console.log(miRef)
    },[contador1,contador2])
  return (
    <div>
        <h1>Ejemplo </h1>
        <h2>Contador1 : {contador1}</h2>
        <h2>Contador2 : {contador2}</h2>
        <h4 ref={miRef}> elemento con useref</h4>
        <button onClick={incrementar1}>Incrementar 1</button>
        <button onClick={incrementar2}>Incrementar 2</button>
    </div>
  )
}

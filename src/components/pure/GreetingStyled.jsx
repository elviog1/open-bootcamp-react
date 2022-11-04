import React, { useState } from 'react'

export default function GreetingStyled(props) {
    const loggedStyle = {
        color: "blue"
    }
    const unloggedStyle ={
        color: "tomato",
        fontWeight: "bold"
    }
    const [logged,setLogged] = useState(false)
  return (
    <div style={logged ? loggedStyle: unloggedStyle}>
        <h2>Hola {props.name}</h2>
        <button onClick={()=> {
            console.log("click")
            setLogged(!logged)
        }}>{logged ? "logout" : "Login"}</button>
    </div>
  )
}

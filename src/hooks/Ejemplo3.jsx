// import React from 'react'

// const miContexto = React.createContext(null)
// export default function Ejemplo3() {
//     const Componente1 = ()=>{
//         const state = useContext(miContexto)
//         return (
//             <div>
//                 <h1>El token es : {state.token}</h1>
//                 <Componente2 />
//             </div>
//         )
//     }
//     const Componente2 = ()=>{
//         return (
//             <div>
//                 <h1>La sesion es : {state.sesion}</h1>

//             </div>
//         )
//     }


    
//     export default function MiComponenteConContexto() {
//         const estadoInicial ={
//             token: "123123123",
//             sesion: 1
//         }
//         const [sessionData, setSessionData] = useState(estadoInicial)
//         function actualizarSesion (){
//             setSessionData({
//                 token:"OIKS3AKMS",
//                 sesion: sessionData.sesion +1
//             })
//         }
//       return (
//         <miContexto.Provider value={sessionData}>
//             <Componente1></Componente1>
//             <button onClick={actualizarSesion}>actualizar</button>
//         </miContexto.Provider>
//       )

// }

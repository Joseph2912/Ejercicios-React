import { useState } from "react";

const Punto4 = () => {

    var Mensaje = ""
//------------------------------------------------

    const buscarRepetidos = (a,b,c) => {
        let mensaje;
        if ((a == b) && (a == c)){
            mensaje = "tres repetidos"
        } 
        else if ((a == b) && (a != c) || (a == c) && (a != b) || (b == c) && (b != a)){
            mensaje = "dos repetidos"
        } 
        else{
            mensaje = "Ningun numero repetido "
        }
        return (mensaje)
        }

//------------------------------------------------

    const [valor1, setValor1] = useState();
    const [valor2, setValor2] = useState();
    const [valor3, setValor3] = useState();
    const [mensajeBuscadorRepetidos, setMensaje] = useState("el sistema detectara cuantos hay repetidos")

//------------------------------------------------
    const obtenerValor1 = (evt) => {
        setValor1(evt.target.value)
    }

//------------------------------------------------
    const obtenerValor2 = (evt) => {
        setValor2(evt.target.value)
    }

//------------------------------------------------
    const obtenerValor3 = (evt) => {
        setValor3(evt.target.value)
    }
//------------------------------------------------

    const calcularRepetidos = (a,b,c) => {
        setMensaje(buscarRepetidos(a,b,c))
        setValor1()
        setValor2()
        setValor3()
    }

//------------------------------------------------
   
    return (
    <>
    <div>
    <h1>Contador de repetidos</h1>
    <p>Primer valor</p>
    <input type="number" value={valor1} onChange={(event) => obtenerValor1(event) }/>
    <p>Segundo valor</p>
    <input type="number" value={valor2} onChange={(event) => obtenerValor2(event) }/>
    <p>Tercer Valor</p> 
    <input type="number" value={valor3} onChange={(event) => obtenerValor3(event) }/>
    <button onClick={() => calcularRepetidos(valor1,valor2,valor3)}>Aceptar</button>
    <p> {mensajeBuscadorRepetidos}</p>
    
    </div>
    </>
    )

    }

    

export default Punto4;
import { useState } from "react";

const Punto6 = () => {


    var arrprincipal = new Array()
    var arrImpar = new Array()

//------------------------------------------------

    const llenarArreglo = (a) => {
        for(let i=0; i <= a; i++){
            arrprincipal[i] = i
        
        }
        return(arrprincipal)
    }

//------------------------------------------------

    const determinarImpares = () => {   
        for(let j=0; j <= arrprincipal.length - 1; j++){
            if(arrprincipal[j] % 2 !== 0){
                arrImpar[j] = j
            }
        }
        return (arrImpar)
        }
    
//------------------------------------------------
    const [valor, setValor] = useState(0);
    const [arregloCompleto, setArregloCompleto] = useState("succesión numerica completa")
    const [todosLosimpares, setArregloimpares] = useState("impares")

    const obtenerValor = (evt) => {
        setValor(evt.target.value)
    }
   
//------------------------------------------------
    const Arreglo = (a) => {
        setArregloCompleto(llenarArreglo(a))
        setArregloimpares(determinarImpares())
        
    }
   
//------------------------------------------------   
    return(
    <>
    <div>
    <h1>Obtener lista de impares</h1>
    <p>tamaño del arreglo:</p>
    <input type="number" value={valor} onChange={(event) => obtenerValor(event) }/>
    <button onClick={() => Arreglo(valor)}>aceptar</button>
    <p> {arregloCompleto.toString()}</p>
    <p> {todosLosimpares.toString()} </p>
    
    </div>
    </>
    
    )
    }

    
export default Punto6;
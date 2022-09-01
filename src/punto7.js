import { useState } from "react";

const Punto7 = () => {
    var Salarios = []
    var SalariosAumento = []

    //------------------------------------------------

    const llenarArreglo = (a) => {
            if(Salarios.length < 10){
                Salarios.push(a)
                
                setArregloCompleto(Salarios)
                
            } else{
                alert("El tamaño maximo es de 10 salarios")
            }
        }

        //------------------------------------------------

    const ajusteSalarios = (Salarios) => {
        for(let j=0; j <= Salarios.length - 1; j++){
            SalariosAumento[j] = (Salarios.length[j] + (Salarios.length[j] * 0.08))
            }
        return (SalariosAumento)
    }

    //------------------------------------------------
    
    const [valor, setValor] = useState(0);
    const [ArraySalarios, setArregloCompleto] = useState(Salarios)
    const [salariosAumento, setSalariosAumento] = useState("salarios con aumento del 8%")

    const obtenerValor = (evt) => {
        setValor(evt.target.value)
    }

    //------------------------------------------------
   

    const Arreglo = (a) => {
        setArregloCompleto(llenarArreglo(a))
    }

    //------------------------------------------------

    const EliminarArreglo = (a) =>{
        Salarios = []
        setArregloCompleto(Salarios)
    }
    //------------------------------------------------

    const RetirarUltimo = (a) =>{
        a.pop()
        setArregloCompleto(a)
    }

    //------------------------------------------------

    const ArregloSalarios = (a) => {
        if(Salarios.length < 10){
   

        }else{
            setSalariosAumento(ajusteSalarios(a))
        }
        
    }
   //------------------------------------------------

    return(
    <>
    <div>
    <h1>registrar y ajustar salarios</h1>
    <p>Ingresa salario:</p>
    <input type="number" value={valor} onChange={(event) => obtenerValor(event) }/>
    <button onClick={() => Arreglo(valor)}>Añadir</button> 
    <button onClick={() => EliminarArreglo(Salarios)}>Vaciar Arreglo</button>
    <button onClick={() => RetirarUltimo(Salarios)}>Retirar Ultimo salario</button>
    <p> Lista de Salarios: {ArraySalarios.toString()}</p>
    <button onClick={() => ArregloSalarios(Salarios)}>Ajuste de 8%</button>
    <p>Salarios con ajuste de 8%: {salariosAumento} </p>
    
    </div>
    </>
    
    )
    }

    export default Punto7;
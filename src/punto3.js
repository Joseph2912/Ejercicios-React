import { useState } from "react";

const Punto3 = () => {

    const calcularH = (hora) => {


        let mensaje;
        let horaReal = Math.abs(hora)
        horaReal = Math.round(horaReal)


//------------------------------------------------
   
        
        if (horaReal < 12 || horaReal === 0 || horaReal === 24){
            mensaje = "Buenos Dias"
        } 
        else if ((12 < horaReal) && (horaReal < 18) || (horaReal === 12)){
            mensaje = "Buenas Tardes"
        } 
        else if ((18 < horaReal) && (horaReal <= 23)){
            mensaje = "Buenas Noches"
        } 
        else{
            mensaje = "El valor ingresado no es 24 horas"
        }
        return (mensaje)
        }


//------------------------------------------------
   

    const [horas, setTiempo] = useState(0);
    const [mensajeConsejo, setMensaje] = useState("ingresar la hora en formato de 24 horas")
    const [nombre, setNombre] = useState("")


//------------------------------------------------
   
    const obtenerSeg = (evt) => {
        setTiempo(evt.target.value)
    }

//------------------------------------------------
   
    const obtenernombre = (evt) => {
        setNombre(evt.target.value)
    }
    
//------------------------------------------------
   

    const calcularTiempo = () => {
        setMensaje(calcularH(horas))
        setTiempo(0)
    }
    
//------------------------------------------------
   
   
    return (
    <>
    <div>
    <h1>Saludo dependiendo la hora</h1>
    <p>nombre</p>
    <input type="text" value={nombre} onChange={(event) => obtenernombre(event) }/>
    <p>hora</p>
    <input type="number" value={horas} onChange={(event) => obtenerSeg(event) }/> 
    <button onClick={() => calcularTiempo(horas)}>Aceptar</button>
    <p> {mensajeConsejo} {nombre}</p>
    
    </div>
    </>
    )

    }

    

export default Punto3;
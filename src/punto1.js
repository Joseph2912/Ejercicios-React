import { useState } from "react";

const Punto1 = () => {

    var h = 0
    var min = 0

    //------------------------------------------------


    const calculaSegundos = (seg) => {
        let residuoSeg
        h = seg / (60 * 60)
        Math.round(h);
        residuoSeg = seg % (60 * 60)
        min = residuoSeg / 60
        Math.round(min)
        residuoSeg = residuoSeg % (60)
        Math.round(residuoSeg)
        setMensajeHora('El tiempo es: ' + Math.round(h) + ':'
            + Math.round(min) + ':' + Math.round(residuoSeg))
    }


    //------------------------------------------------

    const [tiempoSegundos, setTiempo] = useState(0);
    const [mensaje, setMensajeHora] = useState("0 h, 0 min, 0 seg")

    //------------------------------------------------

    const obtenerSegundos = (evt) => {
        setTiempo(evt.target.value)
    }

    //------------------------------------------------

    const calcularTiempo = () => {
        calculaSegundos(tiempoSegundos)
    }

    //------------------------------------------------   
    return (
        <>
            <div>
                <h1>Calculadora de Tiempo en Segundos</h1>
                <input type="number" value={tiempoSegundos} onChange={(event) => obtenerSegundos(event)} />
                <button onClick={() => calcularTiempo(tiempoSegundos)}>aceptar</button>
                <p>{mensaje}</p>

            </div>
        </>
    )

}


export default Punto1;
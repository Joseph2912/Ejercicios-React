import { useState } from "react";

const Punto2 = () => {

    var valorLlamada = 100

    //------------------------------------------------

    const calcularCosto = (seg) => {
        let i = 0
        let min = seg / 60
        Math.round(min)
        if (min <= 3) {

            valorLlamada = 100;
        }
        else {
            let minutosExtra = min - 3
            while (i < minutosExtra) {
                valorLlamada += 50
                i += 1
            }

        }

        return (valorLlamada)
    }
    //------------------------------------------------

    const [tiempoSeg, setTiempo] = useState(0);
    const [valorPagar, setValorPagar] = useState(20)

    //------------------------------------------------

    const obtenerSeg = (evt) => {
        setTiempo(evt.target.value)

    }

    //------------------------------------------------

    const calcularTiempo = () => {
        setValorPagar(calcularCosto(tiempoSeg))
        setTiempo(0)
    }

    //------------------------------------------------

    return (
        <>
            <div>
                <h1>Tarifa Movil</h1>
                <input type="number" value={tiempoSeg} onChange={(event) => obtenerSeg(event)} />
                <button onClick={() => calcularTiempo(tiempoSeg)}>Calcular</button>
                <p> El valor es de: {valorPagar} $</p>

            </div>
        </>
    )

}



export default Punto2;
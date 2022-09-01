import { useState } from "react";

const Punto8 = () => {

    //------------------------------------------------

    var arrPrincipal = new Array()
    var arrDividir = new Array()
    var numero;

    //------------------------------------------------

    const llenarArr = () => {
        for (let i = 0; i <= 10; i++) {
            arrPrincipal[i] = Math.floor(Math.random() * 100)

        }
        return (arrPrincipal)
    }
    //------------------------------------------------
    const dividirValor = (a) => {
        if (a <= 10 && a > -1) {
            numero = arrPrincipal[a]
            for (let j = 0; j < arrPrincipal.length; j++) {
                arrDividir[j] = (arrPrincipal[j] / numero).toFixed(4)
            }
            return (arrDividir)
        } else {
            alert("El valor debe ser un valor entre 0 y 9")
            setDivision("El valor  debe ser un valor entre 0 y 9")
            return ("El valor  debe ser un valor entre 0 y 9")

        }

    }

    //------------------------------------------------

    const [valor, setValor] = useState(0);
    const [totalArr, setTotalArr] = useState("En esta linea veras la lista aleatoria")
    const [arrOperado, setDivision] = useState("En esta linea veras la lista operada")

    //------------------------------------------------
    const obtenerValor = (evt) => {
        setValor(evt.target.value)
    }

    //------------------------------------------------
    const Arreglo = () => {
        setTotalArr(llenarArr())
        setDivision(dividirValor(valor))

    }

    //------------------------------------------------

    return (
        <>
            <div>
                <h1>Lista aleatoria y dividir elementos</h1>
                <p>Digita la posición del valor en la lista:</p>
                <input type="number" value={valor} onChange={(event) => obtenerValor(event)} />
                <button onClick={() => Arreglo(valor)}>Generar Lista aleatoria y divida</button>
                <p> Lista de numeros aleatorios: {totalArr.toString()}</p>
                <p> Divididos por el puesto {valor}: {arrOperado.toString()} </p>

            </div>
        </>
    )
}


export default Punto8;
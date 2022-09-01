import { useState } from "react";


const Punto9 = () => {

    //------------------------------------------------

    const llenarTabla = (totalFilas, totalColumnas) => {
        var Table = document.getElementById("tblDatos");
        Table.innerHTML = "";
        if (totalFilas < 0 || totalColumnas < 0) {
            alert("La cantidad de filas y columnas no debe ser negativo")
        } else {
            if (filas > 0 || columnas > 0) {
                for (let i = 0; i < totalFilas; i++) {
                    let filaActual = document.getElementById('tblDatos').insertRow(i);
                    for (let j = 0; j < totalColumnas; j++) {
                        let celda = filaActual.insertCell(j);

                        celda.innerHTML = `Fila: ${i} - Columna: ${j}`;
                    }

                }
            }


        }


    }

    //------------------------------------------------

    const [filas, setFilas] = useState(0);
    const [columnas, setColumnas] = useState(0);

    //------------------------------------------------
    const obtenerFilas = (evt) => {
        setFilas(evt.target.value)
    }

    //------------------------------------------------
    const obtenerColumnas = (evt) => {
        setColumnas(evt.target.value)
    }

    //------------------------------------------------

    return (
        <>
            <div>
                <h1>Tabla </h1>
                <p>Digitar la cantidad de filas:</p>
                <input type="number" value={filas} onChange={(event) => obtenerFilas(event)} />
                <p>Digitar la cantidad de Columnas:</p>
                <input type="number" value={columnas} onChange={(event) => obtenerColumnas(event)} />
                <button onClick={() => llenarTabla(filas, columnas)}>Crear Tabla</button>

                <table id="tblDatos" border={1}></table>
            </div>
        </>
    )
}


export default Punto9;
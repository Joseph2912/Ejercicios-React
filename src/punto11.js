import { useState } from "react";

const Punto11 = () => {


    const Calculadora = (a, b, c) => {


        let nota1 = +a
        let nota2 = +b
        let nota3 = +c


        if (a < 0 || b < 0 || c < 0) {
            alert("Las notas no pueden ser negativas")
        }
        else {
            var Mensaje;
            var Suma = (nota1 + nota2 + nota3)
            console.log(Suma)

            var valorPromedio = (Suma / 3)
            console.log(valorPromedio)

            if (valorPromedio >= 3) {
                Mensaje = "Gano la Materia"
            } else {
                Mensaje = "Perdio la Materia"
            }
            return (Mensaje)

        }
    }


    //------------------------------------------------

    const EstudiantetoString = (estudiante) => {
        return "Nombre:" + estudiante.nombre + "- Nota1: " + estudiante.Nota1 + "- Nota2: " + estudiante.Nota2 + "- Nota3: " + estudiante.Nota3 + "- Estado: " + estudiante.estado;
    }


    //------------------------------------------------
    const [nombre, setNombre] = useState("");
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [estadoFinal, setMensaje] = useState("Aqui mostrara el estudiante")
    const [estudianteFinal, setEstudiante] = useState()

    //------------------------------------------------

    const obtenerNombre = (evt) => {
        setNombre(evt.target.value)
    }


    //------------------------------------------------
    const obtenerValor1 = (evt) => {
        setNota1(evt.target.value)
    }


    //------------------------------------------------
    const obtenerValor2 = (evt) => {
        setNota2(evt.target.value)
    }


    //------------------------------------------------
    const obtenerValor3 = (evt) => {
        setNota3(evt.target.value)
    }

    //------------------------------------------------
    const crearEstudiante = (nombre, a, b, c) => {
        const estudiante = {
            nombre: nombre,
            Nota1: a,
            Nota2: b,
            Nota3: c,
            estado: "Ya valio",
        }
        estudiante.estado = Calculadora(nota1, nota2, nota3)
        setEstudiante(estudiante)
        alert("Se añadio el estudiante")
    }


    //------------------------------------------------

    const mostrarEstudiante = (estudiante) => {
        setMensaje(EstudiantetoString(estudiante))
    }

    //------------------------------------------------
    return (
        <>
            <div>
                <h1>Estudiantes</h1>
                <p>ingresar el nombre</p>
                <input type="text" value={nombre} onChange={(event) => obtenerNombre(event)} />
                <p>Nota1</p>
                <input type="number" step="0.01" value={nota1} onChange={(event) => obtenerValor1(event)} />
                <p>Nota2</p>
                <input type="number" step="0.01" value={nota2} onChange={(event) => obtenerValor2(event)} />
                <p>Nota3</p>
                <input type="number" step="0.01" value={nota3} onChange={(event) => obtenerValor3(event)} />
                <button onClick={() => crearEstudiante(nombre, nota1, nota2, nota3)}>añadir Estudiante</button>
                <button onClick={() => mostrarEstudiante(estudianteFinal)}>Mostrar Estudiante</button>
                <p>{estadoFinal}</p>

            </div>
        </>
    )

}



export default Punto11;
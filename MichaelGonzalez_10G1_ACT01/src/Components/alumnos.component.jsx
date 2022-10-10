import { useState } from "react";
import { AlumnosListadoApp } from "./alumnos.listado.component";

export const AlumnosApp = () => {
    const [alumnos, setAlumno] = useState([]);

    let nombreAlumno = "";
    const guardar = () => {

        nombreAlumno = document.getElementById("inpNombreAlumno").value;

        setNombre(nombreAlumno);
        setAlumno(prevState => {
            return [...prevState, nombreAlumno]
        });
        console.log(alumnos)
    }

    return (<>
        <div className="Content">
            <div className="ContentAddAlumno">

                <h2>Guardar Alumno</h2>
                <input type="text" id="inpNombreAlumno" name="inpNombreAlumno" placeholder="Nombre del alumno" />
                <button type="button" onClick={guardar}>Guardar</button>
            </div>
            
            <hr />
            <AlumnosListadoApp alumnos={alumnos}></AlumnosListadoApp>
            <hr />
        </div>
    </>);
}


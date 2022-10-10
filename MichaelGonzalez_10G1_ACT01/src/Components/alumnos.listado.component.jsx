export const AlumnosListadoApp = (props) => {
    const alumnos = props.alumnos;
    const listItems = alumnos.map((nombre) =>
        <li>{nombre}</li>
    );

    return (<>
        <div className="ContentAlumnos">
            <h2>Alumnos</h2>
            <ul>{listItems}</ul>
        </div>
    </>);
}
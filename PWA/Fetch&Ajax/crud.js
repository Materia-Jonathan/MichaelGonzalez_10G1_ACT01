onsubmit = () => {
    var nombre = document.getElementById('name').value;
    var trabajo = document.getElementById('job').value;

    var persona = { name: nombre, job: trabajo };

    guardar(persona);
};

updatePersona = () => {
    var nombre = document.getElementById('name').value;
    var trabajo = document.getElementById('job').value;
    var id = parseInt(document.getElementById('idPersona').value);

    var persona = { name: nombre, job: trabajo };
    actualizar = (persona, id);
};

deletePersona = () => {

    var Id = parseInt(document.getElementById('idPersona').value);
    eliminar = (Id);
    console.log(Id);
};


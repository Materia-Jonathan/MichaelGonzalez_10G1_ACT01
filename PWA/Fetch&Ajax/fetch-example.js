/*Ejemplo con Fetch get*/
/*consultar =()=>{

    fetch('https://reqres.in/api/users',{
    })
    .then(response =>console.log(response.json()))  
    .then(data => console.log(data));
}*/

// Consultar
document.addEventListener("DOMContentLoaded", async () => {

    const url = await fetch("https://reqres.in/api/users")
    const dato = await url.json();
    const body = document.querySelector("#table")


    for (i = 0; i < dato.data.length; i++) {
        body.innerHTML += `<tr>
        <td>${dato.data[i].id}</td>
        <td>${dato.data[i].first_name}</td>
        <td>${dato.data[i].last_name}</td>
        
        <tr>`
    }

})




/*Ejemplo para solicitud de guardar*/
guardar = (persona) => {
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(persona),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(console.log)
        .catch(console.error);
};



/*ACTUALIZAR*/
actualizar = () => {

    var nombre = document.getElementById('name').value;
    var trabajo = document.getElementById('job').value;
    var id = parseInt(document.getElementById('idPersona').value);

    var persona = { name: nombre, job: trabajo };

    fetch(`https://reqres.in/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(persona),
        headers: {
            'Content-Type': 'application/json'
        }
    })

        .then(res => res.json())
        .then(console.log)
        .catch(console.error);
    console.log(persona.name);
};

/*Eliminar*/
eliminar = () => {
    var id = document.getElementById('idPersona').value;
    console.log(id);
    fetch(`https://reqres.in/api/user/?id=${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })


        .then(res => res)
        .then(console.log)
        .catch(console.error);
};


/*consultar();*/
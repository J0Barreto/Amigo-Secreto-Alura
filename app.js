let nombreAmigos = [];

function agregarAmigo() {
    //capturo valor del input del html
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo === "") {
        //en caso de input vacio 
        alert('Por favor, inserte un nombre.');
        } else {
            //capturo el nombre ingresado y lo agrego en array
            nombreAmigos.push(nombreAmigo);
            console.log(nombreAmigos);
            //limpio el input del html 
            document.querySelector('#amigo').value = "";
            cadaAmigo();
        }
}

function cadaAmigo() {
    //obtiene elementos de la lista
    let listaAmigos = document.querySelector("#listaAmigos");
    //limpia lista existente
    listaAmigos.innerHTML = "";
    //iterar sobre el array
    for (let index = 0; index < nombreAmigos.length; index++) {
        const element = nombreAmigos[index];
        //agregar elementos a la lista
        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        listaAmigos.appendChild(listaHTML);
    }
}

function sortearAmigo(){
    let numeroMaximo = nombreAmigos.length;
    //valido que haya registros en el array en la condición
    if (nombreAmigos != '') {
        //sorteo el indice
        let indiceSorteo = Math.floor(Math.random()*numeroMaximo);
        //inserto el resultado en el html
        let mostrarResultado = document.getElementById('resultado');
        mostrarResultado.innerHTML = nombreAmigos[indiceSorteo];
    } else {
        // control de qué si no hay registro le informe que debe cargarlo
        alert("Por favor, inserte un nombre antes de sortear");    
    }
}
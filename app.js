// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Lista que gardara los amigos ingresados
let listaAmigos=[];
//Lista que gaurdara los amigos escogidos para evitar repeticion
let amigosEscogidos=[];

//Agrega amigos a las listas
function agregarAmigo(){
    //Agrega los nombres a la listaAmigos
    agregarLista();
    //Actualiza la la lista de la caja de texto en htlml
    actualizarLista();
    //Limpia el inpuect luego de ser utilizado
    limpiarInput();
}

//Implementacion de agregar a la listaAmigos
function agregarLista(){
    //Guarda en una variable el nombre del amigo y con el trim hace que se elminen espacio extra al inicio y al final
    let nombreAmigo=document.querySelector('#amigo').value.trim();
    //Validacion para que el campo no quede vacio
    if(nombreAmigo!==""){
        listaAmigos.push(nombreAmigo);
    }else{
        alert("Ingresa un nombre de un amigo, ¡¡Campos Vacio!!");

    }
}

//Implementacion de mostrar lista en caja de texto
function actualizarLista(){
    //Selecciona un elemento html y lo guarda en la variable
    let elementoHTML=document.querySelector('#listaAmigos');
    elementoHTML.innerHTML="";//Limpia la caja
    //For para recorrer la lista y se imprima en la caja
    for(let i=0;i<listaAmigos.length;i++){
        elementoHTML.innerHTML+=`${listaAmigos[i]}<br>`;
    }
}

//Funcion para el sorteo de amigos secretos
function sortearAmigo(){
    //Si la listaAmigos Escodigos esta vacia tirar alerta y saldra de la funcion
    if(listaAmigos.length===0){
        alert("Lista vacia")
        return
    }
    //Si el tamaño de la listaEscodigos es igual a la listaAmigos saldra alerta y sale de la funcion
    if(amigosEscogidos.length===listaAmigos.length){
        alert("Todos los amigos fueron sorteados");
        return
    }

    //Almacenara al amigo sorteado
    let amigoSorteado;

    //Ejecuta la primera accion y luego se ve restringido a salir del bucle hasra que la restriccion sea falsa
    do{
        amigoSorteado=listaAmigos[generarSorteo()];//Guarda en amigoSorteado el valor de lal ista con el numero generado
    }while(amigosEscogidos.includes(amigoSorteado));//Recorre y compara
    
    amigosEscogidos.push(amigoSorteado);//Inserta al amigo sorteado en la amigosEcogidos

    document.querySelector('#listaAmigos').innerHTML = `Tu amigo secreto es: ${amigoSorteado}`; //Presenta en el textbox al amigo secreto
}
//Funcion para generar un numero aleatorio de posicion en la lista
function generarSorteo() {
    return Math.floor(Math.random() * listaAmigos.length);
}
//Limpia el Imput
function limpiarInput(){
    document.querySelector('#amigo').value = '';
}


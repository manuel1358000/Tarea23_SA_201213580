var request=require('request');
//Funcion que permite la peticion del nombre del cliente para la solicitud del UBER
function obtenerNombre(){
    //la variable promise, es un componente que nos permite realizar la lectura del nombre de manera sincrona hasta que termine de ingresar el contenido va a ejecutar la funcion que consume el servicio
    const promise=new Promise(function(resolve,reject){
        console.log('Ingrese Nombre');
        var stdin=process.openStdin();
        stdin.addListener('data',function(nombre){
            //retornamos la informacion capturada y se la enviamos por medio de una promesa
            resolve(nombre.toString().trim());
            }
        );
    });
    return promise;
}

//funcion que consume el servicio para la solicitud de un UBER
function enviarSolicitud(nombre){
    //json que contiene el nombre de la persona solicitante
    var jsonDataObj = {'nombre': nombre};
    //se consume el servicio por medio de un request POST, en el cual le enviamos en el body el json con la informacion del cliente
    request({
        method: "POST",
        url:'http://localhost:3000/solicitud',
        json: true,
        body: jsonDataObj
    },function(error,response,body){
        //en esta parte nos retorna la respuesta del servicio
        console.log(body);
    });
}

//llamada a la funcion que tiene una promesa, la cual espera a que ingrese el nombre del cliente
//posteriormente envia la informacion a la funcion que consume el servicio de solicitud de UBER
obtenerNombre().then(function(nombre){
    //la variable nombre contiene el nombre que el cliente ingreso para solicitar el UBER
    enviarSolicitud(nombre);
});
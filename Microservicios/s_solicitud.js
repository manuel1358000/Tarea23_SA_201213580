var request=require('request');
//Funcion que permite la peticion del nombre del cliente para la solicitud del UBER
function obtenerNombre(){
    //la variable promise, es un componente que nos permite realizar la lectura del nombre de manera sincrona hasta que termine de ingresar el contenido va a ejecutar la funcion que consume el servicio
    const promise=new Promise(function(resolve,reject){
        console.log('Ingrese Nombre');
        var stdin=process.openStdin();
        stdin.addListener('data',function(data){
            //retornamos la informacion capturada, la convertimos a string y le quitamos los caracteres de salto de linea
            resolve(data.toString().trim());
            }
        );
    });
    return promise;
}
//funcion que consume el servicio para la solicitud de un UBER
function enviarSolicitud(nombre){
    //json que contiene el nombre de la persona solicitante
    var jsonDataObj = {'nombre': nombre,'id':Math.floor(Math.random() * (1500 -100)) + 100};
    //se consume el servicio por medio de un request POST, en el cual le enviamos en el body el json con la informacion del cliente
    request({
        method: "POST",
        url:'http://localhost:3000/solicitud',
        json: true,
        body: jsonDataObj
    },function(error,response,body){
        //si ocurre un error al solicitar la respuesta, se muestra la alerta
        if(error!=null){
            console.log('Ocurrio un error inesperado, el servicio no esta disponible, intente nuevamente');
            //finalizamos el servicio para que ingrese una nueva solicitud el usuario
            process.exit(1);
        }else{
            //en esta parte nos retorna la respuesta del servicio
            console.log(body);
            process.exit(1);    
        }
    });
}

//llamada a la funcion que tiene una promesa, la cual espera a que ingrese el nombre del cliente
//posteriormente envia la informacion a la funcion que consume el servicio de solicitud de UBER
obtenerNombre().then(function(nombre){
    //la variable nombre contiene el nombre que el cliente ingreso para solicitar el UBER
    enviarSolicitud(nombre);
});
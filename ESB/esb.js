const express = require("express");
const bodyParser = require('body-parser');
const app = express();
var request=require('request');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//servicio que es llamado para poder reenviar la solicitud al administrador de parte del cliente
app.post('/solicitud', function (req, res) {
    let respuesta='';
    //funcion sincrona para esperar la respuesta del administrador
    Enviar_Solicitud_Recepcion(req.body).then(function(respuesta){
        res.send(respuesta);
    });
});
//servicio que se consume para dar el aviso al piloto redirige al servicio de piloto
app.post('/aviso_piloto', function (req, res) {
    //metodo que redirige al piloto y envia el aviso
    EnviarAvisoPiloto(req.body).then(function(body){
        res.send(body);
    });
});
//servicio que redirige la solicitud de ubicacion del piloto al administrador
app.post('/ubicacion_piloto', function (req, res) {
    UbicacionPiloto().then(function(body){
        res.send(body);
    });
});


app.listen(3000, () => {
 console.log("El ESB esta en el puerto 3000");
});

function UbicacionPiloto(json){
    //promesa que nos sirve para consumir el servicio de ubicacion del piloto
    const promise=new Promise(function(resolve,reject){    
        //se consume el servicio por medio de un request POST, en el cual le enviamos en el body el json con la informacion del cliente
        var jsonDataObj =json;
        request({
            method: "POST",
            url:'http://localhost:3002/ubicacion_piloto',
        },function(error,response,body){
            //si ocurre un error al solicitar la respuesta, se muestra la alerta
            if(error!=null){
                reject('Ocurrio un Error reject');
            }else{
                resolve(body);    
            }
        });
    });
    return promise;
}

function EnviarAvisoPiloto(json){
    //promesa que consume el aviso al piloto
    const promise=new Promise(function(resolve,reject){    
        var jsonDataObj =json;
        //se consume el servicio por medio de un request POST, en el cual le enviamos en el body el json con la informacion del cliente
        request({
            method: "POST",
            url:'http://localhost:3002/aviso_piloto',
            json: true,
            body: jsonDataObj
        },function(error,response,body){
            //si ocurre un error al solicitar la respuesta, se muestra la alerta
            if(error!=null){
                reject('Ocurrio un Error reject');
            }else{
                resolve(body);    
            }
        });
    });
    return promise;
}

function Enviar_Solicitud_Recepcion(json){
    //promesa que consume la recepcion de solicitudes
    const promise=new Promise(function(resolve,reject){    
        var jsonDataObj =json;
        //se consume el servicio por medio de un request POST, en el cual le enviamos en el body el json con la informacion del cliente
        request({
            method: "POST",
            url:'http://localhost:3001/recepcion_solicitudes',
            json: true,
            body: jsonDataObj
        },function(error,response,body){
            //si ocurre un error al solicitar la respuesta, se muestra la alerta
            if(error!=null){
                reject('Ocurrio un Error reject');
            }else{
                resolve(body);    
            }
        });
    });
    return promise;
}




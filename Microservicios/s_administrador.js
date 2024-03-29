const express = require("express");
const bodyParser = require('body-parser');
const app = express();
var request=require('request');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// ruta para poder enviar la confirmacion de recepcion de la solicitud
app.post('/recepcion_solicitudes', function (req, res) {
    res.send('Solicitud Ingresada con Exito.');
    console.log('Se ingreso la solicitud del cliente '+req.body['nombre']+' ID: '+req.body['id']);
    //en el momento que se recibe una solicitud, se envia el aviso al piloto por medio de una funcion sincrona para asegurar que la respuesta del piloto no se pierda
    EnviarAvisoPiloto(req.body).then(function(body){
        console.log(body);
        //cuando se tiene la respuesta del piloto se procede a preguntar su ubicacion a cada 5 segundos
        setInterval((body) => {
            //funcion que permite saber la ubicacion del piloto por medio de latitud y longitud
            SolicitarUbicacionPiloto(body).then(function(body){
                console.log('La ubicacion del piloto es latitud: '+body['latitud']+' longitud: '+body['longitud']);
            });
        }, 5000);
    });
});


app.listen(3001, () => {
 console.log("El Servicio Administracion esta en el puerto 3001");
});


function SolicitarUbicacionPiloto(json){
    const promise=new Promise(function(resolve,reject){    
        //se consume el servicio por medio de un request POST, en el cual le enviamos en el body el json con la informacion del cliente
        var jsonDataObj =json;
        request({
            method: "POST",
            url:'http://localhost:3000/ubicacion_piloto',
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


function EnviarAvisoPiloto(json){
    const promise=new Promise(function(resolve,reject){    
        var jsonDataObj =json;
        //se consume el servicio por medio de un request POST, en el cual le enviamos en el body el json con la informacion del cliente
        request({
            method: "POST",
            url:'http://localhost:3000/aviso_piloto',
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
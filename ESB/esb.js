const express = require("express");
const bodyParser = require('body-parser');
const app = express();
var request=require('request');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/solicitud', function (req, res) {
    let respuesta='';
    Enviar_Solicitud_Recepcion(req.body).then(function(respuesta){
        res.send(respuesta);
    });



/*
    if(req.body['nombre']!=null) {
        console.log('Se completo la solicitud para '+req.body.nombre);
        respuesta='Solicitud Completa '+req.body['nombre'];
    }else{
        console.log('No se completo la solicitud');
        respuesta='Solicitud Incompleta';
    }
    res.send(respuesta);*/
});



app.post('/solicitud_piloto', function (req, res) {
    res.send('Solicitud Piloto Completa');
});

app.listen(3000, () => {
 console.log("El ESB esta en el puerto 3000");
});

function Enviar_Solicitud_Recepcion(json){
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




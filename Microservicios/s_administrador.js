const express = require("express");
const bodyParser = require('body-parser');
const app = express();
var request=require('request');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/recepcion_solicitudes', function (req, res) {
    res.send('Solicitud Ingresada con Exito.');
    console.log('Se ingreso la solicitud del cliente '+req.body['nombre']+' ID: '+req.body['id']);
    EnviarAvisoPiloto(req.body).then(function(body){
        console.log(body);
    });
});

app.listen(3001, () => {
 console.log("El Servicio Administracion esta en el puerto 3001");
});


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
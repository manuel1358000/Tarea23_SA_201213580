const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/solicitud', function (req, res) {
    console.log(req.body['nombre']);
    let respuesta='';
if(req.body['nombre']!=null) {
        console.log('Se completo la solicitud para '+req.body.nombre);
        respuesta='Solicitud Completa '+req.body['nombre'];
    }else{
        console.log('No se completo la solicitud');
        respuesta='Solicitud Incompleta';
    }
    res.send(respuesta);
});

app.post('/solicitud_piloto', function (req, res) {
    res.send('Solicitud Piloto Completa');
});

app.listen(3000, () => {
 console.log("El ESB esta en el puerto 3000");
});

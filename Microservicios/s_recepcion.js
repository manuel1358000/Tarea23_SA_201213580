const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/recepcion_solicitudes', function (req, res) {
    res.send('Solicitud Ingresada con Exito.');
    console.log('Se ingreso la solicitud del cliente '+req.body['nombre']+' ID: '+req.body['id']);
    console.log('Enviando Aviso a Piloto');
});

app.listen(3001, () => {
 console.log("El Servicio Recepcion esta en el puerto 3001");
});



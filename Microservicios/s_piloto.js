const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/aviso_piloto', function (req, res) {
    res.send('Aviso a Piloto Existoso');
    console.log('Solicitud de Servicio del cliente '+req.body['nombre']+' ID: '+req.body['id']);
});


app.post('/ubicacion_piloto', function (req, res) {
    let json={'latitud':0,'longitud':0};
    res.send(json);
});


app.listen(3002, () => {
 console.log("El Servicio Piloto esta en el puerto 3002");
});
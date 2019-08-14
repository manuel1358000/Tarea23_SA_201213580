const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//servicio que se consume para darle aviso al piloto de que tiene un viaje
app.post('/aviso_piloto', function (req, res) {
    res.send('Aviso a Piloto Existoso');
    //se imprime en consola el nombre del cliente y su id unico
    console.log('Solicitud de Servicio del cliente '+req.body['nombre']+' ID: '+req.body['id']);
});
//servicio que se consume para saber la ubicacion del piloto, se esta simulando el envio de la posicion por medio de latitud y longitud
app.post('/ubicacion_piloto', function (req, res) {
    let json={'latitud':Math.floor(Math.random() * (1500 -100)) + 100,'longitud':Math.floor(Math.random() * (1500 -100)) + 100};
    res.send(json);
});
app.listen(3002, () => {
 console.log("El Servicio Piloto esta en el puerto 3002");
});
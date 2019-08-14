# Tarea 2 y 3 Laboratorio Software Avanzado


Para la implementacion de los microservicios que se solicitan se utilizo como base el siguiente diagrama:

![Texto alternativo](Diagrama.png)
## Comunicacion Servicios🚀

* RESTFUL
    * RUTAS IMPLEMENTADAS
        * ADMINISTRADOR:
            - /recepcion_solicitudes: permite la comunicacion entre el cliente y el piloto para la confirmacion de la       recepcion de la solicitud
        * PILOTO:
            -   /aviso_piloto: permite dar aviso al piloto de una solicitud.
            -   /ubicacion_piloto: permite consumir la ubicacion del piloto

## Funciones Principales:

* ADMINISTRADOR:
    -   SolicitarUbicacionPiloto: consume el servicio que esta siendo orquestado por el ESB para la ubicacion del piloto, este se consume a cada 5 segundos.
    -   EnviarAvisoPiloto: notifica al piloto de que tiene una solicitud. 
* CLIENTE:
    -   ObtenerNombre: Permite que el cliente ingrese su nombre, y genera un id unico por cada cliente nuevo

    -   enviarSolicitud: permite consumir el servicio del administrador para notificar de una solicitud.

## Versionado 📌

Utilizo [Github] para el versionado. Puede revisar el codigo completo en el siguiente [Repositorio](https://github.com/manuel1358000/Tarea23_SA_201213580)

## Autor ✒️
* **Manuel Fuentes 201213580** - *Desarrollo* 
* **Manuel Fuentes 201213580** - *Documentación*


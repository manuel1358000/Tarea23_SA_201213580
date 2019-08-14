# Tarea 2 y 3 Laboratorio Software Avanzado


Para la implementacion de los microservicios que se solicitan se utilizo como base el siguiente diagrama:

![Texto alternativo](../Microservicios/Diagrama.png)
## Comunicacion Servicios🚀
 Se realizo la comunicacion de todos los servicios por medio de una api restful.

 Funcionalidades ESB:
    El ESB participa como el orquestador de los microservicios, con lo cual cada uno de ellos se maneja de manera independiente, con esto ganamos en que si un servicio no esta disponible, unicamente nos va a reportar que no se puede acceder a el, pero no va a interrumpir con los otros servicios que se tienen.
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


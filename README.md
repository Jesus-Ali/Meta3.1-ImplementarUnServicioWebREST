# Meta3.1-ImplementarUnServicioWebREST
Programar un servicio RESTful para el recurso estudiantes, el cual deberá tener implementados los siguientes, métodos HTTP:
GET, para obtener todos los objetos estudiante registrados y para obtener uno en específico con :id
POST
PUT para sustituir un objeto estudiante ya creado por otro
PATCH para modificar atributos de un estudiante
DELETE para borrar un estudiante

Utilizar Router para separar las rutas por archivo.
La estructura del proyecto deberá quedar de la siguiente forma:
app.js
controladores/
   estudiantes.js
routes/
   index.js
   estudiantes.js

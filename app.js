const express = require('express'); //Importamos el framework express.js
const app = express();//creamos una variable que acceda a express()
const port = 3000;//creamos una variable para definir el puerto

//nos traemos de express el metodo get para retornar una respuesta
//cuando el cliente ingrese a la ruta '/'
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//nos traemos de express el metodo listen para levantar el proyecto
//en el puerto definido
app.listen(port, () => {
  console.log(`Workshop-3 project run on listening at http://localhost:${port}`);
});
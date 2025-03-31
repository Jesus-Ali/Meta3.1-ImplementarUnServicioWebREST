const express = require('express');
const app = express();
const routes = require('./routes');

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas definidas
app.use('/', routes);
const estudiantesRouter = require('./routes/estudiantes');
app.use('/estudiantes', estudiantesRouter);

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
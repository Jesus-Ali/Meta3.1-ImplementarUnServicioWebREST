const express = require('express');
const router = express.Router();
const estudiantesRouter = require('./estudiantes');

// Ruta principal
router.get('/', (req, res) => {
  res.send('API de Estudiantes - Bienvenido');
});

// Rutas para estudiantes
router.use('/estudiantes', estudiantesRouter);

module.exports = router;
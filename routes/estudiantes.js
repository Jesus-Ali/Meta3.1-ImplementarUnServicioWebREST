const express = require('express');
const router = express.Router();
const estudiantesController = require('../controladores/estudiantes');

// GET /estudiantes - Obtener todos los estudiantes
router.get('/', (req, res) => {
  const estudiantes = estudiantesController.findAll();
  res.json(estudiantes);
});

// GET /estudiantes/:id - Obtener un estudiante por ID
router.get('/:id', (req, res) => {
  const estudiante = estudiantesController.findById(req.params.id);
  if (estudiante) {
    res.json(estudiante);
  } else {
    res.status(404).json({ error: 'Estudiante no encontrado' });
  }
});

// POST /estudiantes - Crear un nuevo estudiante
router.post('/', (req, res) => {
  if (!req.body.nombre || !req.body.matricula) {
    return res.status(400).json({ error: 'Nombre y matrícula son obligatorios' });
  }

  const nuevoEstudiante = estudiantesController.createEstudiante(req.body);
  res.status(201).json(nuevoEstudiante);
});

// PUT /estudiantes/:id - Reemplazar completamente un estudiante
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const estudianteExistente = estudiantesController.findById(id);

  if (!estudianteExistente) {
    return res.status(404).json({ error: 'Estudiante no encontrado' });
  }

  // Validación de campos obligatorios
  if (!req.body.nombre || !req.body.matricula) {
    return res.status(400).json({ error: 'Nombre y matrícula son obligatorios' });
  }

  // Reemplaza todos los campos (excepto el ID)
  const estudianteActualizado = {
    id: Number(id),
    nombre: req.body.nombre,
    matricula: req.body.matricula,
    semestreIngreso: req.body.semestreIngreso || estudianteExistente.semestreIngreso,
    creditosCursados: req.body.creditosCursados || estudianteExistente.creditosCursados
  };

  // Actualiza en el array (simulación)
  const index = estudiantesController.findAll().findIndex(e => e.id == id);
  estudiantesController.findAll()[index] = estudianteActualizado;

  res.json(estudianteActualizado);
});

// PATCH /estudiantes/:id - Actualizar parcialmente un estudiante
router.patch('/:id', (req, res) => {
  const estudianteActualizado = estudiantesController.updateEstudiante(
    req.params.id,
    req.body
  );

  if (estudianteActualizado) {
    res.json(estudianteActualizado);
  } else {
    res.status(404).json({ error: 'Estudiante no encontrado' });
  }
});

// DELETE /estudiantes/:id - Eliminar un estudiante
router.delete('/:id', (req, res) => {
  const eliminado = estudiantesController.deleteEstudiante(req.params.id);
  if (eliminado) {
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Estudiante no encontrado' });
  }
});

module.exports = router;
const estudiantes = [
    {
      id: 1,
      nombre: 'Juan Camaney',
      matricula: 123456,
      semestreIngreso: '2016-2',
      creditosCursados: 200
    },
    {
      id: 2,
      nombre: 'Lupita López',
      matricula: 654321,
      semestreIngreso: '2017-2',
      creditosCursados: 100
    }
];

const generateId = () => {
    const maxId = estudiantes.length > 0 
      ? Math.max(...estudiantes.map(e => e.id)) 
      : 0;
    return maxId + 1;
};
  
const createEstudiante = (nuevoEstudiante) => {
    const estudiante = { 
      id: generateId(), 
      ...nuevoEstudiante 
    };
    estudiantes.push(estudiante);
    return estudiante;
};
  
const deleteEstudiante = (id) => {
    const index = estudiantes.findIndex(e => e.id == id);
    if (index !== -1) {
      return estudiantes.splice(index, 1)[0];
    }
    return null;
};

const updateEstudiante = function(id, newData) {
    const estudiante = estudiantes.find(e => e.id == id);
    if (!estudiante) return null;

    // Campos permitidos para actualización
    const camposPermitidos = ['nombre', 'matricula', 'semestreIngreso', 'creditosCursados'];
    
    // Actualiza solo campos válidos
    camposPermitidos.forEach(campo => {
        if (newData[campo] !== undefined) {
            estudiante[campo] = newData[campo];
        }
    });

    return estudiante;
};
  
const findById = function (id) {
      return estudiantes.find((e) => {
          return e.id == id;
      });
};
  
const findByMatricula = function (matricula) {
      return estudiantes.find((e) => {
          return e.matricula == matricula;
      });
};
  
const findAll = function() {
    return estudiantes;
};
  
exports.createEstudiante = createEstudiante;
exports.deleteEstudiante = deleteEstudiante;
exports.updateEstudiante = updateEstudiante;
exports.findById = findById;
exports.findByMatricula = findByMatricula;
exports.findAll = findAll;
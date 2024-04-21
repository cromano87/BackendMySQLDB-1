// importamos rutas
import express from 'express';

// importamos los controladores
import {agregarCitas} from '../controllers/CitasController.js';
import {mostrarCitas} from '../controllers/CitasController.js';
import {mostrarUnaCita} from '../controllers/CitasController.js';
import {borrarUnaCita} from '../controllers/CitasController.js';
import {modificarUnaCita} from '../controllers/CitasController.js';

const router = express.Router();

router.post('/', agregarCitas);
router.get('/', mostrarCitas);
router.get('/:id', mostrarUnaCita);
router.delete('/:id', borrarUnaCita);
router.put('/:id', modificarUnaCita);

export default router;
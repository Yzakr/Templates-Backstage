import { Router } from "express";
// Importar los controllers involucrados
import { getExamples, getspecExample, createExample, updateExample, deleteExample } from "../controllers/example_controller";

// Declaración de un router independiente para cada grupo de rutas
const router = Router();

// Modificar las rutas get, post, put y delete (CRUD)
router.get('/', getExamples);
router.get('/:id', getspecExample);
router.post('/', createExample);
router.put('/:id', updateExample);
router.delete('/:id', deleteExample);

// Exportar el router para utilizarlo en index.js
export default router ;
import { Router } from "express";
import { getIndex, postIndex, update, deleteIndex } from '../controller/index.js';
const router = Router();
router.get('/', getIndex);
router.post("/todo", postIndex);
router.put('/todo/:todoId', update);
router.delete('/todo/:todoId', deleteIndex);
export default router;

import express from 'express';
import { getNotes, createNote } from '../controllers/snippController.js';
const router=express.Router();

router.get('/', getNotes);
router.post('/', createNote);


export default router;
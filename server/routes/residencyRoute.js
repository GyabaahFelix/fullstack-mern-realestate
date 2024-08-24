import express from 'express';
import { createResidency, getAllResidencies, getAllResidency } from '../controllers/resdCntrl.js';
const router = express.Router();

router.post("/create", createResidency)
router.get("/allresd", getAllResidencies)
router.get("/:id", getAllResidency)
export {router as residencyRoute}
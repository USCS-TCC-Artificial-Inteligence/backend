import express from 'express';
import { getConsumptions } from '../services/consumptions.services';
const router = express.Router();

router.get('/:period', getConsumptions);

export default router;

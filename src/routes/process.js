import express from 'express';
import { getProcess, updateProcessTrackingStatus } from '../services/process.services';
const router = express.Router();

router.get('/', getProcess);
router.patch('/track', updateProcessTrackingStatus);

export default router;

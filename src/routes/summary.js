import express from 'express';
import { getGeneralSummary, getProcessSummary, getTagsSummary } from '../services/summary.services';
const router = express.Router();

router.get('/general/:period', getGeneralSummary);
router.get('/tags/:period', getTagsSummary);
router.get('/process/:period', getProcessSummary);

export default router;

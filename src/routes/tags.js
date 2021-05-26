import express from 'express';
import { addTag, getTags } from '../services/tags.services';
const router = express.Router();

router.get('/', getTags);
router.post('/', addTag);

export default router;

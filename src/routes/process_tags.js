import express from 'express';
import {
  bindProcessAndTags,
  getProcessAssociations,
  getSuggestions,
  getTagAssociations,
} from '../services/process_tags.services';
const router = express.Router();

router.post('/bind_process_and_tags', bindProcessAndTags);
router.get('/process_associations', getProcessAssociations);
router.get('/tag_associations', getTagAssociations);
router.get('/suggestions', getSuggestions);

export default router;

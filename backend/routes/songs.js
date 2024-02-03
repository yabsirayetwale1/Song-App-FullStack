import express from 'express';

import { getSongs, getSong, createSong, updateSong, deleteSong } from '../controllers/songs.js';

const router = express.Router();

router.get('/', getSongs);
router.post('/', createSong);
router.get('/:id', getSong);
router.patch('/:id', updateSong);
router.delete('/:id', deleteSong);

export default router;
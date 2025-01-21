import { Router } from 'express';
import newsAPI from '../controller/newsAPI.js';

const router = Router();

router.get('/top-stories', newsAPI.fetchNews);

export default router;

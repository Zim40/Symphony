import { Router } from 'express';

import newsRoutes from './news.js';

const router = Router();

router.use('/', newsRoutes);

export default router;

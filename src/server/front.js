import { Router } from 'express';
import render from './utils/render';

const router = Router();

router.get('/', render);

export default router;

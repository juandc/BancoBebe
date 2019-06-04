import { Router } from 'express';
import render from './utils/render';

const router = Router();

router.get('*', (req, res) => {
  const result = render();
  res.send(result);
});

export default router;

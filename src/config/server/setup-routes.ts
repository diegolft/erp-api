import { Router } from 'express';
import { healthCheck } from '../../routes/health-check';
import { AuthController } from '@/controllers/auth-controllers';

export const router = Router();

export function setupRoutes() {
  const authController = new AuthController();
  router.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  router.get('/health', healthCheck);

  router.post('/login', authController.login);

  return router;
}

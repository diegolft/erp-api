import { Router } from 'express';
import { healthCheck } from '../../routes/health-check';
import { AuthController } from '@/controllers/auth-controllers';
import { authMiddleware } from '../../middlewares/auth-middleware';

export const router = Router();

export function setupRoutes() {
  const authController = new AuthController();
  router.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  router.get('/health', healthCheck);

  router.post('/login', authController.login);

  router.get('/me', authMiddleware, (req, res) => {
    return res.status(200).json({ user: res.locals.user });
  });

  return router;
}

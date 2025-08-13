import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token não informado' });
  }

  const [scheme, token] = authHeader.split(' ');

  if (!/^bearer$/i.test(scheme || '') || !token) {
    return res.status(401).json({ error: 'Formato do token inválido' });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ error: 'JWT_SECRET não configurado' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    res.locals.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
}



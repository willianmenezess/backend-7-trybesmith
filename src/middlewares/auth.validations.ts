import { NextFunction, Request, Response } from 'express';
import jwtUtil from '../utils/jwt.util';
import UserModel from '../database/models/user.model';

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const token = authorization.split(' ')[1] || authorization;
    const decoded = jwtUtil.getPayload(token);
    const user = await UserModel.findOne({ where: { username: decoded.username } });
    if (!user) return res.status(401).json({ message: 'Invalid token' }); 
    
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export default authMiddleware;
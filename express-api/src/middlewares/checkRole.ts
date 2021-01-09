import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import User from '../entities/User';

export const checkRole = (roles: Array<string>) => {
  return async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const id = res.locals.jwtPayload.userId;

    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
      if (roles.indexOf(user.role) > -1) next();
      else res.status(401).send();
    } catch (id) {
      res.status(401).send();
    }
  };
};

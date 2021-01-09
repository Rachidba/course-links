import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { validate } from 'class-validator';

import User from '../entities/User';

class UserController {
  static listAll = async (_req: Request, res: Response): Promise<void> => {
    const userRepository = getRepository(User);
    const users = await userRepository.find({
      select: ['id', 'email', 'role'],
    });

    res.send(users);
  };

  static getOneById = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id;

    const userRepository = getRepository(User);
    try {
      const user = await userRepository.findOneOrFail(id, {
        select: ['id', 'email', 'role'],
      });
      res.status(200).json(user).send();
    } catch (error) {
      res.status(404).send('Not found');
    }
  };

  static newUser = async (req: Request, res: Response): Promise<void> => {
    const { username, password, role } = req.body;
    const user = new User();
    user.email = username;
    user.password = password;
    user.role = role;

    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    const userRepository = getRepository(User);
    try {
      await userRepository.save(user);
    } catch (e) {
      res.status(409).send('email already in use');
      return;
    }
    res.status(201).send('User created');
  };

  static editUser = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const { email, role } = req.body;
    const userRepository = getRepository(User);
    let user;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send('User not found');
      return;
    }

    user.email = email;
    user.role = role;
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    try {
      await userRepository.save(user);
    } catch (e) {
      res.status(409).send('email already in use');
      return;
    }
    res.status(204).send();
  };

  static deleteUser = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;

    const userRepository = getRepository(User);
    try {
      await userRepository.findOneOrFail(id);
      userRepository.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).send('User not found');
      return;
    }
  };
}

export default UserController;

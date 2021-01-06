import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express, { Application, Request, Response } from 'express';
import User from './entity/User';

const app: Application = express();

app.get('/', (_req: Request, res: Response) => {
  createConnection()
    .then(async (connection) => {
      const user = new User();
      user.email = 'rachid@email.com';
      user.password = 'pass';
      await connection.manager.save(user);
      const users = await connection.manager.find(User);
      res.json(users);
    })
    .catch((error) => console.log(error));
});

app.listen(5000, () => console.log('Server runnig on port 5000'));


import { Router } from 'express';
import auth from './auth';
import user from './user';
import lesson from './lesson';

const routes = Router();

routes.use('/auth', auth);
routes.use('/user', user);
routes.use('/lesson', lesson);

export default routes;

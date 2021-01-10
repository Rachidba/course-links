import { Router } from 'express';
import LessonController from '../controllers/LessonController';
// import { checkJwt } from '../middlewares/checkJwt';
// import { checkRole } from '../middlewares/checkRole';

const router = Router();

router.get('/', LessonController.getAll);

router.get('/:slug', LessonController.getOneBySlug);

router.post('/', LessonController.createLesson);

// router.patch('/:id', [checkJwt, checkRole(['ADMIN'])], UserController.editUser);

// router.delete(
//   '/:id',
//   [checkJwt, checkRole(['ADMIN'])],
//   UserController.deleteUser,
// );

export default router;

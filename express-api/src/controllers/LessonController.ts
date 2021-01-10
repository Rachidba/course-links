import { getRepository } from 'typeorm';
import Lesson from '../entities/Lesson';
import { Response, Request } from 'express';
import { validate, ValidationError } from 'class-validator';
import Resource from '../entities/Resource';
import ResourceController from './ResourceController';

class LessonController {
  static getAll = async (_req: Request, res: Response): Promise<void> => {
    const lessonRepository = getRepository(Lesson);
    const lessons = await lessonRepository.find({
      select: ['id', 'title', 'slug', 'description'],
    });
    res.send(lessons);
  };
  static getOneBySlug = async (req: Request, res: Response): Promise<void> => {
    const slug: string = req.params.slug;
    const lessonRepository = getRepository(Lesson);
    try {
      const lesson = await lessonRepository.findOneOrFail(
        {
          slug: slug,
        },
        { relations: ['resources'] },
      );
      res.status(200).json(lesson).send();
    } catch (error) {
      res.status(404).send('Not Found');
    }
  };
  static createLesson = async (req: Request, res: Response): Promise<void> => {
    const { title, description, resources } = req.body;
    const lesson = new Lesson();
    lesson.title = title;
    lesson.description = description;
    try {
      const response = await ResourceController.mapAndValidateResources(
        resources,
      );
      if (response[0] instanceof ValidationError)
        res.status(400).send(response);
      lesson.resources = response as Resource[];
    } catch (e) {
      res.status(400).send(e);
      return;
    }

    const errors = await validate(lesson);
    if (errors.length > 0) {
      res.status(400).send(errors);
    }
    const lessonRepository = getRepository(Lesson);
    try {
      await lessonRepository.save(lesson);
    } catch (e) {
      res.status(400).send(e);
    }
    res.status(201).send('Lesson created');
  };
}

export default LessonController;

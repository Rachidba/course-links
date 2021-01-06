import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express, { Application, Request, Response } from 'express';
import Lesson from './entity/Lesson';
import Curriculum from './entity/Curriculum';

const app: Application = express();

app.get('/', (_req: Request, res: Response) => {
  createConnection()
    .then(async (connection) => {
      const lesson1 = new Lesson();
      lesson1.title = 'A Complete Web Development Learning Path';
      lesson1.description =
        "Web Development is complex, there are so many technologies you might've heard of. Here's a simple and clear path on how to become a web developer today!  Web Development is complex, there are so many technologies you might've heard of. Here's a simple and clear path on how to become a web developer today! ";
      lesson1.link =
        'https://www.youtube.com/watch?v=2-akTTZyrcM&ab_channel=Academind';
      await connection.manager.save(lesson1);

      const lesson2 = new Lesson();
      lesson2.title = 'How The Web Works - The Big Picture';
      lesson2.description =
        "From request to response - how does the web work? Let's have a look at a high-level overview.";
      lesson2.link =
        'https://www.youtube.com/watch?v=hJHvdBlSxug&ab_channel=Academind';
      await connection.manager.save(lesson2);

      const curriculum = new Curriculum();
      curriculum.title = 'Introduction to web developement';
      curriculum.description =
        'A list of ressources to help you understand Web developement';
      curriculum.lessons = [lesson1, lesson2];
      const savedCurriculum = await connection.manager.save(curriculum);

      res.json(savedCurriculum);
    })
    .catch((error) => console.log(error));
});

app.listen(5000, () => console.log('Server runnig on port 5000'));

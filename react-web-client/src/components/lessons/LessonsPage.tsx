import React, { useEffect, useState } from 'react';
import { Lesson } from '../../models/Lesson';
import { getLessons } from '../../api/lesson';
import Spinner from '../common/Spinner';
import LessonsList from './LessonsList';

const LessonsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  useEffect(() => {
    getLessons()
      .then((lessons) => {
        if (lessons instanceof Array) {
          setLessons(lessons);
          setIsLoading(false);
        }
      })
      .catch();
  }, []);
  return isLoading ? <Spinner /> : <LessonsList lessons={lessons} />;
};

export default LessonsPage;

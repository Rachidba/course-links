import React from 'react';
import { Lesson } from '../../models/Lesson';
import LessonItem from './LessonItem';

interface Props {
  lessons: Array<Lesson>;
}

const LessonsList: React.FC<Props> = ({ lessons }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {lessons.map((lesson) => (
          <LessonItem lesson={lesson} key={lesson.id} />
        ))}
      </div>
    </div>
  );
};

export default LessonsList;

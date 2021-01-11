import React from 'react';
import { Link } from 'react-router-dom';
import { Lesson } from '../../models/Lesson';

interface Props {
  lesson: Lesson;
}

const LessonItem: React.FC<Props> = ({ lesson }) => {
  return (
    <div className="col-12 mt-3">
      <div className="card">
        <h5 className="card-header">{lesson.title}</h5>
        <div className="card-body">
          <h5 className="card-title">Created By: {lesson.ownerId}</h5>
          <p className="card-text">{lesson.description}</p>
          <Link className="btn btn-primary" to={'/lessons/' + lesson.slug}>
            View lesson page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LessonItem;

import React, { useEffect, useState } from 'react';
import ResourcesList from './ResourcesList';
import { getLessonBySlug } from '../../api/lesson';
import Spinner from '../common/Spinner';
import { useParams } from 'react-router-dom';
import { Lesson } from '../../models/Lesson';

const LessonPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lesson, setLesson] = useState<Lesson>();
  const { slug }: { slug: string } = useParams();

  useEffect(() => {
    getLessonBySlug(slug)
      .then((lesson) => {
        setLesson(lesson);
        setIsLoading(false);
      })
      .catch();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">{lesson?.title}</h1>
        <p className="lead">{lesson?.description}</p>
        <hr className="my-4" />
        <p>Created by: {lesson?.ownerId}</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Share lesson
          </a>
        </p>
      </div>
      <ResourcesList
        canDelete={false}
        isConnectedStudend={false}
        onDelete={() => {
          return;
        }}
        resources={lesson?.resources ?? []}
      />
    </div>
  );
};

export default LessonPage;

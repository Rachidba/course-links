import React, { useEffect, useState } from 'react';
import ResourcesList from './ResourcesList';
import { getCurriculumBySlug } from './../../api/curriculum';
import Spinner from './../common/Spinner';
import { useParams } from 'react-router-dom';
import { Curriculum } from '../../models/Curriculum';

const CurriculumPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [curriculum, setCurriculum] = useState<Curriculum>();
  const { slug }: { slug: string } = useParams();

  useEffect(() => {
    getCurriculumBySlug(slug)
      .then((curriculum) => {
        setCurriculum(curriculum);
        setIsLoading(false);
      })
      .catch();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">{curriculum?.title}</h1>
        <p className="lead">{curriculum?.description}</p>
        <hr className="my-4" />
        <p>Created by: {curriculum?.ownerId}</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Share curriculum
          </a>
        </p>
      </div>
      <ResourcesList resources={curriculum?.resources ?? []} />
    </div>
  );
};

export default CurriculumPage;

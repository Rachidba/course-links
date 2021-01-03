import React, { useEffect, useState } from 'react';
import { Curriculum } from '../../models/Curriculum';
import { getCurriculums } from './../../api/curriculum';
import Spinner from './../common/Spinner';
import CurriculumsList from './CurriculumsList';

const CurriculumsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [curriculums, setCurriculums] = useState<Curriculum[]>([]);
  useEffect(() => {
    getCurriculums()
      .then((curriculums) => {
        if (curriculums instanceof Array) {
          setCurriculums(curriculums);
          setIsLoading(false);
        }
      })
      .catch();
  }, []);
  return isLoading ? (
    <Spinner />
  ) : (
    <CurriculumsList curriculums={curriculums} />
  );
};

export default CurriculumsPage;

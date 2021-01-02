import React from 'react';
import { Curriculum } from '../../models/Curriculum';
import CurriculumItem from './CurriculumItem';

interface CurriculumsListProps {
  curriculums: Array<Curriculum>;
}

const CurriculumsList: React.FC<CurriculumsListProps> = ({ curriculums }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {curriculums.map((curriculum) => (
          <CurriculumItem curriculum={curriculum} key={curriculum.id} />
        ))}
      </div>
    </div>
  );
};

export default CurriculumsList;

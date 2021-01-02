import React from 'react';
import { Link } from 'react-router-dom';
import { Curriculum } from '../../models/Curriculum';

interface CurriculumItemProps {
  curriculum: Curriculum;
}

const CurriculumItem: React.FC<CurriculumItemProps> = ({ curriculum }) => {
  return (
    <div className="col-12 mt-3">
      <div className="card">
        <h5 className="card-header">{curriculum.title}</h5>
        <div className="card-body">
          <h5 className="card-title">Created By: {curriculum.ownerId}</h5>
          <p className="card-text">{curriculum.description}</p>
          <Link
            className="btn btn-primary"
            to={'/curriculum/' + curriculum.slug}
          >
            View curriculum page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CurriculumItem;

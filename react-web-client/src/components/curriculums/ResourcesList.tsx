import React from 'react';
import { Resource } from '../../models/Resource';
import ResourceItem from './ResourceItem';

interface ResourcesListProps {
  resources: Resource[];
}

const ResourcesList: React.FC<ResourcesListProps> = ({ resources }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {resources.map((resource) => (
          <ResourceItem resource={resource} key={resource.order} />
        ))}
      </div>
    </div>
  );
};

export default ResourcesList;

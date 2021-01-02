import React from 'react';
import { Resource } from '../../models/Resource';

interface ResourceItemProps {
  resource: Resource;
}

const ResourceItem: React.FC<ResourceItemProps> = ({ resource }) => {
  return (
    <div className="col-12 mt-3">
      <div className="card">
        <div className="card-horizontal">
          <a href={resource.link}>
            <div className="img-square-wrapper">
              <img
                className=""
                src="http://via.placeholder.com/300x180"
                alt="Card image cap"
              />
            </div>
          </a>
          <div className="card-body">
            <h4 className="card-title">{resource.title}</h4>
            <p className="card-text">{resource.description}</p>
          </div>
        </div>
        {/* <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div> */}
      </div>
    </div>
  );
};

export default ResourceItem;

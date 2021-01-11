import React from 'react';
import { Resource } from '../../models/Resource';
import ResourceItem from './ResourceItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  grid: {
    display: 'grid',
    gridAutoRows: 'max-content',
    justifyItems: 'center',
    gap: '1em',
  },
}));

interface Props {
  resources: Resource[];
}

const ResourcesList: React.FC<Props> = ({ resources }) => {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      {resources.map((resource) => (
        <ResourceItem resource={resource} key={resource.order} />
      ))}
    </div>
  );
};

export default ResourcesList;

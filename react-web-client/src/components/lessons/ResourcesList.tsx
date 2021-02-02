import React from 'react';
import { Resource } from '../../models/Resource';
import ResourceItem from './ResourceItem';
import { makeStyles } from '@material-ui/core/styles';
import { getUuid } from '../../utils/utils';

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
  isConnectedStudend: boolean;
  canDelete: boolean;
  onDelete: (order: number) => void;
}

const ResourcesList: React.FC<Props> = ({
  resources,
  isConnectedStudend,
  canDelete,
  onDelete,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      {resources.map((resource) => (
        <ResourceItem
          isConnectedStudend={isConnectedStudend}
          canDelete={canDelete}
          resource={resource}
          key={getUuid()}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ResourcesList;

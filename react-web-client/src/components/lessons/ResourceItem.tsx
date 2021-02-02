import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Resource } from '../../models/Resource';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: '100%',
    display: 'grid',
    overflow: 'auto',
    gridTemplateColumns: '1fr 2fr 1fr',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      justifyItems: 'normal',
      width: '100%',
      textAlign: 'center',
    },
  },
  gridItemEnd: {
    justifySelf: 'end',
    [theme.breakpoints.down('sm')]: {
      justifySelf: 'center',
    },
  },
  gridMidItem: {
    padding: '0 10px',
  },
  image: {
    maxWidth: 300,
    maxHeight: 180,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

interface Props {
  resource: Resource;
  isConnectedStudend: boolean;
  canDelete: boolean;
  onDelete: (order: number) => void;
}

const ResourceItem: React.FC<Props> = ({
  resource,
  isConnectedStudend,
  canDelete,
  onDelete,
}) => {
  const classes = useStyles();
  function renderButton() {
    if (isConnectedStudend) {
      return (
        <Button
          variant="outlined"
          size="large"
          className={classes.button}
          startIcon={<CheckIcon />}
        >
          Lessson completed
        </Button>
      );
    } else if (canDelete) {
      return (
        <Button
          variant="outlined"
          size="large"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={() => {
            onDelete(resource.order);
          }}
        >
          Delete resource
        </Button>
      );
    }
  }
  return (
    <Paper className={classes.paper} elevation={3}>
      <div>
        <a href={resource.link}>
          <ButtonBase className={classes.image}>
            <img
              className={classes.img}
              src="http://via.placeholder.com/300x180"
            />
          </ButtonBase>
        </a>
      </div>
      <div className={classes.gridMidItem}>
        <h3>{resource.title}</h3>
        <p>{resource.description}</p>
      </div>
      <div className={classes.gridItemEnd}>{renderButton()}</div>
    </Paper>
  );
};

export default ResourceItem;

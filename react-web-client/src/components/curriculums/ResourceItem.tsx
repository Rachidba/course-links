import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Resource } from '../../models/Resource';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
    display: 'grid',
    overflow: 'auto',
    gridTemplateColumns: '1fr 2fr 1fr',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
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

interface ResourceItemProps {
  resource: Resource;
}

const ResourceItem: React.FC<ResourceItemProps> = ({ resource }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={3}>
      <div>
        <a href={resource.link}>
          <ButtonBase className={classes.image}>
            <img
              className={classes.img}
              alt="complex"
              src="http://via.placeholder.com/300x180"
            />
          </ButtonBase>
        </a>
      </div>
      <div className={classes.gridMidItem}>
        <h3>{resource.title}</h3>
        <p>{resource.description}</p>
      </div>
      <div className={classes.gridItemEnd}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<CheckIcon />}
          disabled={true}
        >
          <Typography variant="subtitle1">Lessson completed</Typography>
        </Button>
      </div>
    </Paper>
  );
};

export default ResourceItem;

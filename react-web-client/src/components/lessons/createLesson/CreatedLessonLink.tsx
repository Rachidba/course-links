import React from 'react';
import {
  Button,
  Card,
  CardContent,
  makeStyles,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  lessonLinkContainer: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gap: '5px',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'auto',
      gridAutoFlow: 'row',
    },
  },
}));

interface Props {
  lessonLink: string;
}

const CreatedLessonLink: React.FC<Props> = ({ lessonLink }) => {
  const classes = useStyles();
  return (
    <Card>
      {/* <CardHeader title="Lesson was created succefuly" /> */}
      <div>
        <h3>
          Lesson was created succefuly, you can copy the link and share it with
          your students
        </h3>
      </div>
      <CardContent className={classes.lessonLinkContainer}>
        <TextField
          InputProps={{
            readOnly: true,
          }}
          value={lessonLink}
        />
        <Button>Copy the link</Button>
      </CardContent>
    </Card>
  );
};

export default CreatedLessonLink;

import { Button, Card, CardContent, Box, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import InputField from '../../common/InputField';
import { Lesson, emptyLesson } from '../../../models/Lesson';

interface Props {
  onSubmit: (values: Lesson) => void;
  handlePrevStep: () => void;
}

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      display: 'grid',
      rowGap: '5px',
      justifyContent: 'center',
    },
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

const CreateResourceForm: React.FC<Props> = ({ onSubmit, handlePrevStep }) => {
  const classes = useStyles();
  return (
    <Formik initialValues={emptyLesson} onSubmit={(values) => onSubmit(values)}>
      {() => (
        <Card>
          <CardHeader title="Create new lesson" />
          <CardContent>
            <Form>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="title"
                  label="Lesson's title"
                  component={InputField}
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="description"
                  label="Lesson's description"
                  multiline
                  component={InputField}
                />
              </Box>
              <div className={classes.flex}>
                <Button className={classes.button} onClick={handlePrevStep}>
                  Back to ressources list
                </Button>
                <Button className={classes.button} type="submit">
                  Publish lesson and get URL
                </Button>
              </div>
            </Form>
          </CardContent>
        </Card>
      )}
    </Formik>
  );
};

export default CreateResourceForm;

import { Button, Card, CardContent, Box, CardHeader } from '@material-ui/core';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import InputField from '../../common/InputField';
import { Resource } from '../../../models/Resource';

interface Props {
  onSubmit: (values: Resource) => void;
}

const CreateResourceForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ title: '', description: '', link: '', order: -1 }}
      onSubmit={(values) => onSubmit(values)}
    >
      {() => (
        <Card>
          <CardHeader title="Add a list of resources" />
          <CardContent>
            <Form>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="title"
                  label="Title"
                  component={InputField}
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="description"
                  label="Description"
                  multiline
                  component={InputField}
                />
              </Box>
              <Box paddingBottom={2}>
                <Field
                  fullWidth
                  name="link"
                  label="Resource URL"
                  component={InputField}
                />
              </Box>
              <Button type="submit" fullWidth>
                Add resource to the lesson
              </Button>
            </Form>
          </CardContent>
        </Card>
      )}
    </Formik>
  );
};

export default CreateResourceForm;

import { Button, TextareaAutosize, InputLabel } from '@material-ui/core';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import InputField from '../common/InputField';
import { Resource } from '../../models/Resource';

interface Props {
  onSubmit: (values: Resource) => void;
}

const CreateResourceForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ title: '', description: '', link: '', order: -1 }}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Field name="title" placeholder="Title" component={InputField} />
          <InputLabel htmlFor="description">Description</InputLabel>
          <TextareaAutosize
            id="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-label="empty textarea"
            placeholder="Description..."
          />
          <InputLabel htmlFor="link">Ressource URL</InputLabel>
          <Field
            name="link"
            placeholder="Resource URL"
            component={InputField}
          />
          <Button type="submit">Add resource</Button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateResourceForm;

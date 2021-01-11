import React from 'react';
import { FieldProps } from 'formik';
import { TextField } from '@material-ui/core';

interface Props extends FieldProps {
  placeholder: string;
}

const InputField: React.FC<Props> = ({ placeholder, field }) => {
  return <TextField placeholder={placeholder} {...field} />;
};

export default InputField;

import React from 'react';
import { FieldProps } from 'formik';
import { TextField } from '@material-ui/core';

interface Props extends FieldProps {
  label: string;
  multiline: boolean;
  fullWidth: boolean;
}

const InputField: React.FC<Props> = ({
  label,
  multiline,
  fullWidth,
  field,
}) => {
  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      rows={4}
      multiline={multiline}
      {...field}
    />
  );
};

export default InputField;

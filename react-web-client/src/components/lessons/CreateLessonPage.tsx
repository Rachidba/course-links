import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Resource } from '../../models/Resource';
import CreateResourceForm from './CreateResourceForm';
import ResourcesList from './ResourcesList';

const CreateLessonPage: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  function handleSubmite(values: Resource) {
    values.order = resources.length + 1;
    setResources([...resources, values]);
  }
  return (
    <div>
      Create new Lesson
      <CreateResourceForm onSubmit={handleSubmite} />
      <Button>Save lesson and get link</Button>
      <ResourcesList resources={resources} />
    </div>
  );
};

export default CreateLessonPage;

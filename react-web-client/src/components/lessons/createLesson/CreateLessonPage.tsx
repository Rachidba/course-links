import React, { useState } from 'react';
import { Resource } from '../../../models/Resource';
import { emptyLesson, Lesson } from '../../../models/Lesson';
import CreateResourceForm from './CreateResourceForm';
import CreateLessonForm from './CreateLessonFrom';
import ResourcesList from './../ResourcesList';
import { Button } from '@material-ui/core';

const CreateLessonPage: React.FC = () => {
  const [lesson, setLesson] = useState<Lesson>(emptyLesson);
  const [step, setStep] = useState<number>(1);
  function handleAddResource(values: Resource) {
    values.order = lesson.resources.length + 1;
    setLesson({ ...lesson, resources: [...lesson.resources, values] });
  }
  function handleSubmit(values: Lesson) {
    // values.order = lesson.resources.length + 1;
    // setLesson({ ...lesson, resources: [...lesson.resources, values] });
    console.log('publish lesson', values);
  }
  function nextStep() {
    setStep(step + 1);
  }
  function prevStep() {
    setStep(step - 1);
  }
  function renderSwitch() {
    switch (step) {
      case 1:
        return (
          <>
            {lesson.resources.length > 0 ? (
              <Button onClick={nextStep} fullWidth>
                Continue lesson creation with {lesson.resources.length}{' '}
                resources
              </Button>
            ) : (
              <></>
            )}
            <CreateResourceForm onSubmit={handleAddResource} />
            <ResourcesList resources={lesson.resources} />
          </>
        );
      case 2:
        return (
          <CreateLessonForm handlePrevStep={prevStep} onSubmit={handleSubmit} />
        );
    }
  }
  return (
    <div>
      <h3>Create lesson</h3>
      {renderSwitch()}
    </div>
  );
};

export default CreateLessonPage;

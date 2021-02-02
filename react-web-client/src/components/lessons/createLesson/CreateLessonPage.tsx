import React, { useState } from 'react';
import { Resource } from '../../../models/Resource';
import { emptyLesson, Lesson } from '../../../models/Lesson';
import CreateResourceForm from './CreateResourceForm';
import CreateLessonForm from './CreateLessonFrom';
import ResourcesList from './../ResourcesList';
import { Button } from '@material-ui/core';
import CreatedLessonLink from './CreatedLessonLink';

const CreateLessonPage: React.FC = () => {
  const [lesson, setLesson] = useState<Lesson>(emptyLesson);
  const [step, setStep] = useState<number>(1);
  function handleAddResource(values: Resource) {
    values.order = lesson.resources.length + 1;
    setLesson({ ...lesson, resources: [...lesson.resources, values] });
  }
  function handleDeleteResource(order: number) {
    const resources: Resource[] = [];
    for (let i = 0; i < lesson.resources.length; i++) {
      if (order != i + 1) {
        resources.push({
          order: resources.length + 1,
          title: lesson.resources[i].title,
          description: lesson.resources[i].description,
          link: lesson.resources[i].link,
        });
      }
    }
    setLesson({ ...lesson, resources: resources });
  }
  function handleSubmit(values: Lesson) {
    nextStep();
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
                Continue with {lesson.resources.length} resources
              </Button>
            ) : (
              <></>
            )}
            <CreateResourceForm onSubmit={handleAddResource} />
            <ResourcesList
              canDelete={true}
              isConnectedStudend={false}
              onDelete={handleDeleteResource}
              resources={lesson.resources}
            />
          </>
        );
      case 2:
        return (
          <CreateLessonForm handlePrevStep={prevStep} onSubmit={handleSubmit} />
        );
      case 3:
        return <CreatedLessonLink lessonLink={'dsdfa'} />;
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

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import Navbar from './common/navbar/Navbar';
import LessonPage from './lessons/LessonPage';
import LessonsPage from './lessons/LessonsPage';
import HomePage from './home/HomePage';
import PageNotFound from './PageNotFound';
import Container from '@material-ui/core/Container';

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/lessons/:slug" component={LessonPage} />
          <Route path="/lessons" component={LessonsPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;

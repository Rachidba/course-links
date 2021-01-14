import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import Navbar from './common/navbar/Navbar';
import LessonPage from './lessons/LessonPage';
import LessonsPage from './lessons/LessonsPage';
import HomePage from './home/HomePage';
import PageNotFound from './PageNotFound';
import Container from '@material-ui/core/Container';
import CreateLessonPage from './lessons/CreateLessonPage';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/create-lesson" component={CreateLessonPage} />
          <Route path="/lessons/:slug" component={LessonPage} />
          <Route path="/lessons" component={LessonsPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default App;

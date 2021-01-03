import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import CurriculumPage from './curriculums/CurriculumPage';
import CurriculumsPage from './curriculums/CurriculumsPage';
import HomePage from './home/HomePage';
import PageNotFound from './PageNotFound';

const App: React.FC = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/curriculum/:slug" component={CurriculumPage} />
        <Route path="/curriculums" component={CurriculumsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;

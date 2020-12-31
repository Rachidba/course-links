import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import CurriculumPage from './curriculums/CurriculumPage';
import HomePage from './home/HomePage';
import PageNotFound from './PageNotFound';

export default function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={AboutPage} />
                <Route path="/curriculum/:slug" component={CurriculumPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    )
} 


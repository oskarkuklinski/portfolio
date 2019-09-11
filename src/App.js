import React, { Component } from 'react';
import { Route, Switch, Match } from 'react-router-dom';
import "./App.scss";

import About from './components/about/About';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';

import resumeData from './resumeData';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route 
                        path="/"
                        exact
                        render={props => <About {...props} data={resumeData} /> } />
                    <Route path="/resume/" exact component={Resume} />
                    <Route path="/portfolio/" exact component={Portfolio} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;

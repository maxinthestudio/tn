import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from './components/layout/Layout';
import { MainMenu } from './components/mainmenu/MainContent';
import ListTasks from './components/list/ListTasks';
import GenerateTasks from './components/generate/GenerateTasks';

const App = () => {

  return (
    <Router>
      <Switch>
        <Layout exact path="/" components={[MainMenu]} />
        <Layout exact path="/list" components={[ListTasks]} />
        <Layout exact path="/generate" components={[GenerateTasks]} />
      </Switch>
    </Router>
  );

}

export default connect(null, null)(App);

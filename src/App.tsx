import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import EmailList from './components/EmailList';
import Header from './components/Header';
import Mail from './components/Mail';
import Sidebar from './components/Sidebar';

import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={EmailList} />
            <Route path="/mail" component={Mail} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

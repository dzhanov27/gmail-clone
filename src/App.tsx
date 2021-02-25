import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// pages
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';

// styles
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={AuthPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  );
};

export default App;

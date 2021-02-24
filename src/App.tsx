import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import EmailList from './components/EmailList';
import Header from './components/Header';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import Sidebar from './components/Sidebar';

import './styles/App.css';

const App: React.FC = () => {
  const [sendMailVisible, setSendMailVisible] = useState(false);

  function showSendMail(): void {
    setSendMailVisible(true);
  }

  function hideSendMail(): void {
    setSendMailVisible(false);
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar showSendMail={showSendMail} />
          <Switch>
            <Route path="/" exact component={EmailList} />
            <Route path="/mail" component={Mail} />
          </Switch>
          {sendMailVisible && <SendMail hideSendMail={hideSendMail} />}
        </div>
      </div>
    </Router>
  );
};

export default App;

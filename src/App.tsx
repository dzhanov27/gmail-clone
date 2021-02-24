import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import EmailList from './components/EmailList';
import Header from './components/Header';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import Sidebar from './components/Sidebar';

// styles
import './styles/App.css';

// redux
import { selectSendMailIsOpen } from './features/mailSlice';

const App: React.FC = () => {
  const sendMailIsOpen = useSelector(selectSendMailIsOpen);

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
          {sendMailIsOpen && <SendMail />}
        </div>
      </div>
    </Router>
  );
};

export default App;

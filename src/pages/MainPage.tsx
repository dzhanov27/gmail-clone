import React from 'react';
import { Route } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';
import { selectSendMailIsOpen } from '../features/mailSlice';

// components
import EmailList from '../components/EmailList';
import Header from '../components/Header';
import Mail from '../components/Mail';
import SendMail from '../components/SendMail';
import Sidebar from '../components/Sidebar';

const MainPage: React.FC = () => {
  const sendMailIsOpen = useSelector(selectSendMailIsOpen);

  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Route path="/" exact component={EmailList} />
        <Route path="/mail" component={Mail} />
        {sendMailIsOpen && <SendMail />}
      </div>
    </div>
  );
};

export default MainPage;

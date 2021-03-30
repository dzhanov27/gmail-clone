import React from 'react';
import { Route } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';
import { selectSendMailIsOpen } from '../features/mailPopupSlice';

// components
import Mail from './MailPage';
import EmailList from '../components/MailList';
import Header from '../components/Header';
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
        <Route path="/mail/:id" component={Mail} />
        {sendMailIsOpen && <SendMail />}
      </div>
    </div>
  );
};

export default MainPage;
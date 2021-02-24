import React, { useEffect, useState } from 'react';
import { Checkbox, IconButton } from '@material-ui/core';

// icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

// import { Link } from 'react-router-dom';
import Section from './Section';
import EmailRow from './EmailRow';

import '../styles/EmailList.css';

const EmailList: React.FC = () => {
  interface Mails {
    id: string;
    sender: string;
    subject: string;
    descriptio: string;
    date: string;
    __v: number;
  }
  const [data, setData] = useState<Mails[]>([]);

  async function fetchData() {
    const response = await fetch('http://localhost:5000/mails');
    const ddata = await response.json();
    setData(ddata);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox color="default" />
          <IconButton size="small">
            <ExpandMoreIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton>
            <NavigateNextIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__mailsBox">
        <div className="emailList__sections">
          <Section
            Icon={InboxIcon}
            title="Несортированные"
            color="red"
            selected
          />
          <Section
            Icon={PeopleIcon}
            title="Соцсети"
            color="blue"
            selected={false}
          />
          <Section
            Icon={LocalOfferIcon}
            title="Промоакции"
            color="green"
            selected={false}
          />
        </div>
        <div className="emailList__mails">
          <EmailRow
            id="1"
            sender="Google"
            subject="Welcome to Gmail"
            description="Смените раскрытые пароли раскрытые пароли раскрытые пароли раскрытые пароли раскрытые пароли раскрытые пароли раскрытые пароли раскрытые пароли раскрытые пароли раскрытые пароли"
            date="15 февр"
          />
          <pre>{data}</pre>
        </div>
      </div>
    </div>
  );
};

export default EmailList;

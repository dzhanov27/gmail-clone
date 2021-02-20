import React from 'react';
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
  const d: any = new Date();
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
            id={1}
            sender="Google"
            subject="Welcome to Gmail"
            description="Смените раскрытые пароли"
            date={d.toString()}
          />
          <EmailRow
            id={1}
            sender="Facebbok"
            subject="here are many variations of passages"
            description="Смените раскрытые пароли"
            date={d.toString()}
          />
          <EmailRow
            id={1}
            sender="Hackerrank"
            subject="Where can I get some?"
            description="Смените раскрытые пароли"
            date={d.toString()}
          />
          <EmailRow
            id={1}
            sender="Djinni.co"
            subject="Welcome to Gmail hello how are you"
            description="Смените раскрытые пароли раскрытые пароли раскрытые пароли раскрытые пароли раскрытые пароли раскрытые пароли"
            date={d.toString()}
          />
        </div>
      </div>
    </div>
  );
};

export default EmailList;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

// components
import Section from './Section';
import EmailRow from './EmailRow';

// redux
import { loadMailsAsync, selectMails } from '../features/mailsSlice';
import {
  openPromo,
  openSocial,
  openUnsorted,
  selectSectionType,
} from '../features/sectionSlice';

// styles
import '../styles/EmailList.css';

const EmailList: React.FC = () => {
  const mails = useSelector(selectMails);
  const section = useSelector(selectSectionType);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMailsAsync());
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox color="default" />
          <IconButton size="small">
            <ExpandMoreIcon />
          </IconButton>
          <IconButton onClick={() => dispatch(loadMailsAsync())}>
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
          <button type="button" onClick={() => dispatch(openUnsorted())}>
            <Section
              Icon={InboxIcon}
              title="Несортированные"
              color="red"
              selected={section.red}
            />
          </button>
          <button type="button" onClick={() => dispatch(openSocial())}>
            <Section
              Icon={PeopleIcon}
              title="Соцсети"
              color="blue"
              selected={section.blue}
            />
          </button>
          <button type="button" onClick={() => dispatch(openPromo())}>
            <Section
              Icon={LocalOfferIcon}
              title="Промоакции"
              color="green"
              selected={section.green}
            />
          </button>
        </div>
        <div className="emailList__mails">
          {mails.map((mail) => {
            return (
              <EmailRow
                sender={mail.sender}
                subject={mail.subject}
                description={mail.description}
                date={mail.date}
                key={mail.sender + mail.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmailList;

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
import MailRow from './MailRow';

// redux
import {
  loadMailsAsync,
  selectMails,
  setMailsNumber,
} from '../features/mailsSlice';
import {
  openPromo,
  openSocial,
  openUnsorted,
  selectSectionType,
} from '../features/sectionSlice';

// styles
import '../styles/EmailList.css';

const MailList: React.FC = () => {
  const mails = useSelector(selectMails);
  const section = useSelector(selectSectionType);
  const dispatch = useDispatch();

  const loadMailsBySection = () => {
    switch (section) {
      case 'red':
        dispatch(loadMailsAsync('regular'));
        break;
      case 'blue':
        dispatch(loadMailsAsync('social'));
        break;
      case 'green':
        dispatch(loadMailsAsync('promo'));
        break;
      default:
        dispatch(loadMailsAsync('regular'));
        break;
    }
  };

  useEffect(() => {
    loadMailsBySection();
  }, []);

  useEffect(() => {
    dispatch(setMailsNumber(mails));
  }, [mails]);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox color="default" />
          <IconButton size="small">
            <ExpandMoreIcon />
          </IconButton>
          <IconButton onClick={() => loadMailsBySection()}>
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
          <button
            type="button"
            onClick={() => {
              dispatch(openUnsorted());
              dispatch(loadMailsAsync('regular'));
            }}
          >
            <Section
              Icon={InboxIcon}
              title="Несортированные"
              color="red"
              selected={section === 'red'}
            />
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(openSocial());
              dispatch(loadMailsAsync('social'));
            }}
          >
            <Section
              Icon={PeopleIcon}
              title="Соцсети"
              color="blue"
              selected={section === 'blue'}
            />
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(openPromo());
              dispatch(loadMailsAsync('promo'));
            }}
          >
            <Section
              Icon={LocalOfferIcon}
              title="Промоакции"
              color="green"
              selected={section === 'green'}
            />
          </button>
        </div>
        <div className="emailList__mails">
          {mails.map((mail) => {
            return (
              <MailRow
                id={mail._id}
                senderName={mail.senderName}
                subject={mail.subject}
                description={mail.description}
                date={mail.date}
                starred={mail.starred}
                key={mail._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MailList;

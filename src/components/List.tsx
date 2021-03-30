import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, IconButton } from '@material-ui/core';

// icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// components
import MailRow from './MailRow';

// redux
import { loadStarredMailsAsync, selectMails } from '../features/mailsSlice';

// styles
import '../styles/EmailList.css';

const List: React.FC = () => {
  const mails = useSelector(selectMails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStarredMailsAsync());
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox color="default" />
          <IconButton size="small">
            <ExpandMoreIcon />
          </IconButton>
          <IconButton onClick={() => loadStarredMailsAsync()}>
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

export default List;

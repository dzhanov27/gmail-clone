import React from 'react';
import { useHistory } from 'react-router-dom';

// icons
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { openSendMail } from '../features/mailPopupSlice';
import {
  // selectMails,
  selectMailsNumber,
  // setMailsNumber,
} from '../features/mailsSlice';

// components
import SidebarOption from './SidebarOption';

// styles
import '../styles/Sidebar.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const mailsNumber = useSelector(selectMailsNumber);
  const history = useHistory();

  const indexHandle = () => {
    history.push('/');
  };

  const starredHandle = () => {
    history.push('/starred');
  };

  return (
    <div className="sidebar">
      <button
        type="button"
        className="newEmailBtn"
        onClick={() => dispatch(openSendMail())}
      >
        <img
          src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
          alt=""
        />
        <span>
          <b>Написать</b>
        </span>
      </button>

      <SidebarOption
        Icon={InboxIcon}
        title="Входящие"
        selected
        number={mailsNumber}
        handle={indexHandle}
      />
      <SidebarOption
        Icon={StarIcon}
        title="Помеченные"
        selected={false}
        handle={starredHandle}
      />
      <SidebarOption
        Icon={WatchLaterIcon}
        title="Отложенные"
        selected={false}
      />
      <SidebarOption Icon={SendIcon} title="Отправленные" selected={false} />
      <SidebarOption Icon={NoteIcon} title="Черновики" selected={false} />
      <SidebarOption Icon={ExpandMoreIcon} title="Ещё" selected={false} />
    </div>
  );
};

export default Sidebar;

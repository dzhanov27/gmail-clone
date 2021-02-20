import React from 'react';

// icons
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarOption from './SidebarOption';

import '../styles/Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <button type="button" className="newEmailBtn">
        <img
          src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
          alt=""
        />
        <span>
          <b>Написать</b>
        </span>
      </button>

      <SidebarOption Icon={InboxIcon} title="Входящие" selected />
      <SidebarOption Icon={StarIcon} title="Помеченные" selected={false} />
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

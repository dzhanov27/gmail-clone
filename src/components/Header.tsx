import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';

import '../styles/Header.css';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="Gmail"
        />
      </div>

      <div className="header__middle">
        <IconButton size="small">
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Поиск в почте" />
        <IconButton size="small">
          <ArrowDropDownIcon className="header__inputCaret" />
        </IconButton>
      </div>

      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton size="small" onClick={() => history.push('/login')}>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;

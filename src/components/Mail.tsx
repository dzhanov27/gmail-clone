import React from 'react';

// icons
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Avatar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

import '../styles/Mail.css';

const Mail: React.FC = () => {
  return (
    <div className="mail">
      <div className="mail__settings">
        <Link to="/">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <IconButton>
          <MoveToInboxIcon />
        </IconButton>
        <IconButton>
          <ErrorIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <WatchLaterIcon />
        </IconButton>
        <IconButton>
          <DraftsIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>

      <div className="mail__article">
        <div className="mail__articleTitle">
          <h2>Subject</h2>
        </div>
        <div className="mail__articleSender">
          <Avatar />
          <h4>Sender</h4>
        </div>
        <div className="mail__articleMessage">
          <p>description</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;

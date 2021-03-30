import React, { useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';

// icons
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Avatar, IconButton } from '@material-ui/core';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { loadMailAsync, selectMail, clearMail } from '../features/mailSlice';

import '../styles/Mail.css';

const MailPage: React.FC = () => {
  const mailId = useParams<{ id: string }>().id;
  const mail = useSelector(selectMail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMailAsync(mailId));
  }, []);

  return (
    <div className="mail">
      <div className="mail__settings">
        <Link to="/">
          <IconButton onClick={() => dispatch(clearMail())}>
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
          <h2>{mail && mail.subject}</h2>
        </div>
        <div className="mail__articleSender">
          <Avatar />
          <h4>{mail && mail.senderName}</h4>
        </div>
        <div className="mail__articleMessage">
          <p>{mail && mail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MailPage;

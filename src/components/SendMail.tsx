import React from 'react';

// icons
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import '../styles/SendMail.css';
import { IconButton } from '@material-ui/core';

export interface SendMailProps {
  hideSendMail?: (e: React.MouseEvent) => void;
}

const SendMail = ({ hideSendMail }: SendMailProps) => {
  return (
    <div className="sendMail">
      <div className="sendMail__head">
        <p>Новое сообщение</p>
        <button className="closeButton" type="button" onClick={hideSendMail}>
          <ClearIcon />
        </button>
      </div>
      <div className="sendMail__body">
        <div className="sendMail__recipient">
          <input type="text" placeholder="Кому" />
        </div>

        <div className="sendMail__subject">
          <input type="text" placeholder="Тема" />
        </div>

        <div className="sendMail__description">
          <textarea />
        </div>

        <div className="sendMail__buttons">
          <button type="button" className="sendButton">
            Отправить
          </button>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
          <IconButton size="small">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SendMail;

import React from 'react';

// icons
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { Checkbox, IconButton } from '@material-ui/core';
// import { Link } from 'react-router-dom';

type EmailProps = {
  id: number;
  sender: string;
  subject: string;
  description: string;
  date: string;
};

const EmailRow = ({ id, sender, subject, description, date }: EmailProps) => {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox color="default" size="small" />
        <IconButton size="small">
          <StarOutlineIcon />
        </IconButton>
      </div>
      <div className="emailRow__sender">
        {sender}
        {id}
      </div>

      <div className="emailRow__message">
        <h3>
          {subject}
          <span>{description}</span>
        </h3>
      </div>
      <div className="emailRow__date">{date.slice(4, 10)}</div>
    </div>
  );
};

export default EmailRow;

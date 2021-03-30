import React from 'react';
import { useHistory } from 'react-router-dom';

// icons
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import { Checkbox, IconButton } from '@material-ui/core';
// import { Link } from 'react-router-dom';

export interface EmailProps {
  id: string;
  senderName: string;
  subject: string;
  description: string;
  date: string;
  starred: boolean;
}

const EmailRow = ({
  id,
  senderName,
  subject,
  description,
  date,
  starred,
}: EmailProps) => {
  const history = useHistory();

  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox color="default" size="small" />
        <IconButton size="small">
          {starred ? <StarIcon /> : <StarOutlineIcon />}
        </IconButton>
      </div>
      <button
        type="button"
        onClick={() => {
          history.push(`/mail/${id}`);
        }}
        className="clickButton"
      >
        <div className="emailRow__sender">{senderName}</div>

        <div className="emailRow__message">
          <h3>
            {subject}
            <span>{description}</span>
          </h3>
        </div>
        <div className="emailRow__date">{date}</div>
      </button>
    </div>
  );
};

export default EmailRow;

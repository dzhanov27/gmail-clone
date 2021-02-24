import React from 'react';

import '../styles/EmailList.css';

interface SectionProps {
  Icon: any;
  title: string;
  color: string;
  selected: boolean;
}

const Section = ({ Icon, title, color, selected }: SectionProps) => {
  return (
    <div
      className={`section ${selected && 'section--selected'}`}
      style={{
        borderBottom: `${selected && `3px solid ${color}`}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <p>{title}</p>
    </div>
  );
};

export default Section;

import React from 'react';

// import '../styles/Sidebar.css';

type OptionProps = {
  Icon: any;
  title: string;
  selected: boolean;
  // number?: number;
};

const SidebarOption = ({ Icon, title, selected }: OptionProps) => {
  return (
    <div className={`sidebarOption ${selected && 'sidebar--active'}`}>
      <Icon />
      <p>{title}</p>
    </div>
  );
};

export default SidebarOption;

import React from 'react';

// import '../styles/Sidebar.css';

export interface OptionProps {
  Icon: any;
  title: string;
  selected: boolean;
  number?: number;
}

// const defaultProps = {
//   number: 0,
// };

const SidebarOption = ({ Icon, title, selected, number }: OptionProps) => {
  return (
    <button
      type="button"
      className={`sidebarOption ${selected && 'sidebar--active'}`}
    >
      <Icon />
      <p>{title}</p>
      <span>{number && number}</span>
    </button>
  );
};

// SidebarOption.defaultProps = defaultProps;

export default SidebarOption;

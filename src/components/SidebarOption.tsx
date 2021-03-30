import React from 'react';

export interface OptionProps {
  Icon: any;
  title: string;
  selected: boolean;
  number?: number;
  handle?: () => void;
}

const SidebarOption = ({
  Icon,
  title,
  selected,
  number,
  handle,
}: OptionProps) => {
  return (
    <button
      type="button"
      className={`sidebarOption ${selected && 'sidebar--active'}`}
      onClick={handle}
    >
      <Icon />
      <p>{title}</p>
      <span>{number && number}</span>
    </button>
  );
};

// SidebarOption.defaultProps = defaultProps;

export default SidebarOption;

import React from "react";
import { ControlsWrapper } from "./units";
import ControlButton from "./ControlButton";
import { Edit, Delete } from "@material-ui/icons";

const Controls = ({ visible, onMouseLeave, onDeleteClick, onEditClick }) => {
  const icons = [
    { IconComponent: Edit, color: "green", onClick: onEditClick },
    { IconComponent: Delete, color: "red", onClick: onDeleteClick },
  ];

  return (
    <ControlsWrapper {...{ visible, onMouseLeave }}>
      {icons.map((iconProps) => (
        <ControlButton {...iconProps} key={iconProps.color} />
      ))}
    </ControlsWrapper>
  );
};

export default Controls;

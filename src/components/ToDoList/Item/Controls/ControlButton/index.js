import React from "react";
import { ButtonWrapper } from "./units";

const ControlButton = ({ IconComponent, color, onClick }) => {
  return (
    <ButtonWrapper color={color} onClick={onClick}>
      <IconComponent fontSize={"large"} style={{ color: "white" }} />
    </ButtonWrapper>
  );
};

export default ControlButton;

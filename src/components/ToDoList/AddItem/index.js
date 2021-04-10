import React from "react";
import { Column, ContentText, Description, ItemWrapper, Title } from "../units";
import { AddIcon } from "./units";

const AddItem = ({ onClick }) => {
  return (
    <ItemWrapper
      bgColor={"white"}
      textColor={"grey"}
      align={"flex-start"}
      pointer
      onClick={onClick}
    >
      <Column pointer>
        <AddIcon />
        <ContentText>
          <Title>Добавить новую задачу</Title>
          <Description>Кликните, чтобы добавить новую задачу</Description>
        </ContentText>
      </Column>
    </ItemWrapper>
  );
};

export default AddItem;

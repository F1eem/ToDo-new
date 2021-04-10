import React, { useCallback, useRef, useState } from "react";
import { UncheckedIcon, CheckedIcon, ArrowIcon } from "./units";
import { Column, ContentText, Description, ItemWrapper, Title } from "../units";

import Controls from "./Controls";
import { useDispatch } from "react-redux";
import { changeCompleted, deleteItem } from "../../../store/actions";
import ConfirmDialog from "../../ConfirmDialog";

const Item = ({
  id,
  title = "Нет названия",
  description = "Нет описания",
  completed = false,
  onEditClick,
}) => {
  const [controlsVisible, setControlsVisible] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const dispatch = useDispatch();

  const checkboxClickHandler = () => {
    dispatch(changeCompleted(id));
  };

  return (
    <>
      <ItemWrapper {...{ completed }}>
        <Column onMouseEnter={() => setControlsVisible(false)}>
          {completed ? (
            <CheckedIcon onClick={checkboxClickHandler} />
          ) : (
            <UncheckedIcon onClick={checkboxClickHandler} />
          )}
          <ContentText>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </ContentText>
        </Column>
        <Column w={50} onMouseEnter={() => setControlsVisible(true)}>
          <ArrowIcon />
        </Column>
        <Controls
          visible={controlsVisible}
          onMouseLeave={() => setControlsVisible(false)}
          onDeleteClick={() => setOpenConfirm(true)}
          onEditClick={() => onEditClick(id, title, description)}
        />
      </ItemWrapper>
      <ConfirmDialog
        open={openConfirm}
        setOpen={setOpenConfirm}
        onOk={() => dispatch(deleteItem(id))}
        onCancel={() => setOpenConfirm(false)}
      />
    </>
  );
};

export default Item;

import React, { useState } from "react";
import { DeleteForever as ClearAllIcon } from "@material-ui/icons";
import { DeleteAllWrapper } from "./units";
import { deleteAll, deleteItem } from "../../../store/actions";
import ConfirmDialog from "../../ConfirmDialog";
import { useDispatch } from "react-redux";

const DeleteAll = () => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <DeleteAllWrapper onClick={() => setOpenConfirm(true)}>
        <ClearAllIcon fontSize={"large"} />
        <span>Удалить все</span>
      </DeleteAllWrapper>
      <ConfirmDialog
        open={openConfirm}
        setOpen={setOpenConfirm}
        onOk={() => {
          dispatch(deleteAll());
        }}
        onCancel={() => setOpenConfirm(false)}
        all
      />
    </>
  );
};

export default DeleteAll;

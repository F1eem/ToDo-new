import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

const ConfirmDialog = ({ open, setOpen, onOk, onCancel,all, ...rest }) => {
  return (
    <Dialog disablePortal open={open} onClose={() => setOpen(false)} {...rest}>
      <DialogTitle>Удалить?</DialogTitle>
      <DialogContent>Вы уверены, что хотите удалить задач{all ? 'и?' : 'у?'}</DialogContent>
      <DialogActions>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>Отмена</Button>
      </DialogActions>
    </Dialog>
  );
};

export default React.memo(ConfirmDialog);

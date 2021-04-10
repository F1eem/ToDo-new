import React, { useEffect, useState } from "react";
import { ListWrapper, MainWrapper } from "./units";
import Item from "./Item";
import AddItem from "./AddItem";
import { useDispatch, useSelector } from "react-redux";
import AddEditDialog from "../AddEditDialog";
import { addItem, deleteAll, deleteItem, editItem } from "../../store/actions";
import DeleteAll from "./DeleteAll";

const ToDoList = () => {
  const list = useSelector((state) => state.list.items);
  const [openAdd, setOpenAdd] = useState(false);
  const [editData, setEditData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    if (!openAdd) {
      setEditData({});
    }
  }, [openAdd]);

  return (
    <>
      <h1>• TODO LIST •</h1>
      <MainWrapper>
        <ListWrapper>
          <AddItem onClick={() => setOpenAdd(true)} />
          {list.map((item) => (
            <Item
              {...item}
              key={item.id}
              onEditClick={(id, title, description) => {
                setEditData({ id: id, title: title, description: description });
                setOpenAdd(true);
              }}
            />
          ))}
          {list.length > 0 && <DeleteAll />}
        </ListWrapper>
      </MainWrapper>

      <AddEditDialog
        open={openAdd}
        editData={editData}
        setOpen={setOpenAdd}
        onCancel={() => setOpenAdd(false)}
        onOk={({ title, description }) =>
          editData.id
            ? dispatch(editItem(editData.id, title, description))
            : dispatch(addItem(title, description))
        }
      />
    </>
  );
};

export default ToDoList;

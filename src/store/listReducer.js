import {
  ADD_ITEM,
  CHANGE_COMPLETED,
  DELETE_ALL,
  DELETE_ITEM,
  EDIT_ITEM,
} from "./types";

const initialState = {
  items: [
    {
      id: 0,
      title: "Купить слона",
      description: "В понедельник уже надо",
      completed: false,
    },
    {
      id: 1,
      title: "Купить комп",
      description: "В вт уже надо",
      completed: true,
    },
    {
      id: 2,
      title: "Купить машину",
      description: "В среду уже надо",
      completed: true,
    },
    {
      id: 3,
      title: "Купить телефон",
      description: "В чт уже надо",
      completed: false,
    },
  ],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COMPLETED:
      return {
        ...state,
        items: state.items.map((item) => ({
          ...item,
          completed: action.id === item.id ? !item.completed : item.completed,
        })),
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };

    case ADD_ITEM:
      const nextId = Math.max(...state.items.map(({ id }) => id), 0) + 1;
      return {
        ...state,
        items: [
          { id: nextId, title: action.title, description: action.description },
          ...state.items,
        ],
      };

    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map((item) => ({
          ...item,
          title: action.id === item.id ? action.title : item.title,
          description:
            action.id === item.id ? action.description : item.description,
        })),
      };

    case DELETE_ALL:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

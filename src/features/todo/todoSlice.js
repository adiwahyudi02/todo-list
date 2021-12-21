import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    itemLoaded: (state, action) => {
      state.value = action.payload;
    },
    add: (state, action) => {
      const lastItem = state.value.slice(-1)[0];

      const generateDate = (rawDate) => {
        const year = rawDate.getFullYear();
        const month = rawDate.getMonth() + 1;
        const date = rawDate.getDate();
        const time = rawDate.getHours() + ":" + rawDate.getMinutes();

        return `${year}-${month}-${date} ${time}`;
      };
      state.value.push({
        ...action.payload,
        id: lastItem.id + 1,
        createdAt: generateDate(new Date()),
        status: 0,
      });
    },
    edit: (state, action) => {
      state.value = state.value.map((item) => {
        if (item.id === action.payload.id) item = action.payload;

        return item;
      });
    },
    remove: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { itemLoaded, add, edit, remove } = todoSlice.actions;

export const fetchTodo = () => async (dispatch) => {
  const { data } = await axios.get(
    "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"
  );
  await dispatch(itemLoaded(data));
};

export const selectTodo = (state) => state.todo.value;

export default todoSlice.reducer;

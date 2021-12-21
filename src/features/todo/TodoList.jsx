import React from "react";
import Todoitem from "./TodoItem";

const Todolist = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Todoitem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Todolist;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal";
import TodoFormCreate from "./TodoFormCreate";
import Todolist from "./TodoList";
import { selectTodo, fetchTodo } from "./todoSlice";

const Todo = () => {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch()
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchTodo())
  }, []);

  const todoNotFinished = () => {
    return todos
      .filter((item) => item.status === 0)
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  };
  const todoFinished = () => {
    return todos
      .filter((item) => item.status === 1)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };

  return (
    <div className="w-full md:w-1/2 md:px-2 p-5 m-auto ">
      <h1 className="text-3xl font-bold my-10">To Do List</h1>

      <h1 className="text-2xl font-semibold">Not finished</h1>
      <Todolist data={todoNotFinished()} />

      <h1 className="text-2xl font-semibold">Finished</h1>
      <Todolist data={todoFinished()} />

      <button className="w-full bg-emerald-500 text-white rounded px-5 py-3" onClick={()=> setShowForm(true)}>Create new</button>
      {showForm && (
        <Modal title="Create To Do" setShow={setShowForm} show={showForm}>
          <TodoFormCreate />
          </Modal >
        )
      }
    </div>
  );
};

export default Todo;

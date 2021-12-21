import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Errormessage from "../../components/ErrorMessage";
import { edit } from "./todoSlice";

const TodoFormEdit = ({data}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!title) {
      setError("Title is required")
      return
    }
    else if(!description) {
      setError("Description is required")
      return
    }


    dispatch(
      edit({
        ...data,
        title,
        description,
        status,
      })
    );
    setError("")

  };

  useEffect(() => {
    setTitle(data.title)
    setDescription(data.description)
    setStatus(data.status)
  }, [data]);

  return (
      <form onSubmit={handleSubmit}>
        {error && <Errormessage message={error}/>}
        <div>
          <div>
            <label>Title</label>
          </div>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full border border-black p-2 my-3"
          />
        </div>
        <div>
          <div>
            <label>Description</label>
          </div>
          <textarea
            cols="30"
            rows="10"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="w-full border border-black p-2 my-3"
          ></textarea>
        </div>
        <div>
          <div>
            <label>Status Finish</label>
            
          </div>
            <input
            type="checkbox"
            checked={status === 1}
            onChange={(event) => setStatus(event.target.checked ? 1 : 0)}
            className="border-2 border-black"
          />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-emerald-500 text-white rounded px-5 py-2">Save</button>
        </div>
      </form>
  );
};

export default TodoFormEdit;

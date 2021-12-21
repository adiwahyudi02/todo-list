import React, { useState } from "react";
import Modal from "../../components/Modal";
import TodoDetail from "./TodoDetail";

const Todoitem = ({ item }) => {
  const [detail, setDetail] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDetail = (item) => {
    setDetail(item)
    setShowModal(true)
  };
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-5 my-4 cursor-pointer" onClick={() => handleDetail(item)}>
        <p className="font-semibold">
          {item.title}
        </p>
        <p className="text-sm">
          {item.createdAt}
        </p>
      </div>
      {detail && <Modal title="Detail To Do" setShow={setShowModal} show={showModal}>
        <TodoDetail item={item} />
      </Modal>}
    </>
  );
};

export default Todoitem;

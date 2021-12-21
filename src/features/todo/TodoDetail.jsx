import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../../components/Modal';
import TodoFormEdit from './TodoFormEdit';
import { remove } from "./todoSlice";

const TodoDetail = ({ item }) => {
    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(remove({ id }));
    };
    const handleEdit = (id) => {
        setShowForm(true)
    };

    return (
        <>
            <div>
                <div>
                    <h2 className="text-2xl">{ item.title }</h2>
                    <p>{ item.description }</p>
                </div>
                <div className="mt-5">
                {item.status === 0 && (
                    <button className="bg-red-500 text-white rounded px-5 py-1 mr-2" onClick={()=> handleRemove(item.id)}>Delete</button>
                )}
                    
                 <button className="bg-yellow-500 text-white rounded px-5 py-1 mr-2" onClick={()=> handleEdit()}>Edit</button>
                </div>
            </div>
            {showForm && (
                <Modal title="Edit To Do" setShow={setShowForm} show={showForm}>
                    <TodoFormEdit data={item} />
                </Modal >
                )
            }
        </>
    );
}

export default TodoDetail;

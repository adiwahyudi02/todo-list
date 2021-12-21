import React from 'react';

const Modal = ({ title, show, setShow, children }) => {
    return ( 
        show && (
            <>
                <div className="max-w-xl min-h-fit m-auto mt-20 rounded-2xl bg-white justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none">
                    <div className="w-full w-auto my-6 mx-auto">
                        <div className="border-0 rounded-lg  flex flex-col w-full outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    { title }
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none"
                                    onClick={() => setShow(false)}
                                >
                                    <span className="text-black h-6 w-6 text-2xl block outline-none">
                                    ×
                                    </span>
                                </button>
                            </div>
                            <div className="p-6 flex-auto">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-gray-500" onClick={() => setShow(false)}></div>
            </>
        )
    );

}

export default Modal;

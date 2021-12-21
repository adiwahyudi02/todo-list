import React from 'react';

const Errormessage = ({message}) => {
    return (
        <div className="bg-red-200 w-full px-4 py-2 rounded-lg">
            {message}
        </div>
    );
}

export default Errormessage;

import React from "react";

function TableItem({one,two,three}) {
    return (  
        <div className="border my-1 border-blue-500">
            <div className="flex justify-between">
                <div className="w-1/3 text-center">{one}</div>
                <div className="w-1/3 text-center">{two}</div>
                <div className="w-1/3 text-center">{three}</div>
            </div>
        </div>
    );
};

export default TableItem;
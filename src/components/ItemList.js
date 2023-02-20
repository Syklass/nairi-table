import React from "react";
import TableItem from "../components/TableItem"


function ItemList({items}) {
    const renderItems = items.map((el,key)  =>{
        return (
            <div key={key}>
                <TableItem 
                one={el.one}
                two={el.two}
                three={el.three}
                />
            </div>

        )
    })

    return (  
        <div className="w-full">
            {renderItems}
        </div>
    );
}

export default ItemList;
import React from "react";
import TableItem from "../components/TableItem"


function ItemList({items}) {
    const renderItems = items.map((el)  =>{
        return (
            <TableItem 
            one={el.one}
            two={el.two}
            three={el.three}
            />
        )
    })

    return (  
        <div className="w-full">
            {renderItems}
        </div>
    );
}

export default ItemList;
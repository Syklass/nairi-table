import React from "react";
import { useState } from "react";

import ItemList from "./ItemList";
import Button from "./Button";
function Table() {

const data = [
        {
        id:0,
        one:"Секция 1",
        two:"Секция 2",
        three:"Секция 3",
        },
        {
        id:1,
        one:"Секция IISIS 1",
        two:"Секция 2",
        three:"Секция 3",
        },
        {
        id:2,
        one:"Секция 1",
        two:"Секция CDCDCDCD 2",
        three:"Секция 3",
        },
        {
        id:3,
        one:"Секция 1",
        two:"Секция 2",
        three:"Секция 3",
        },
        {
        id:4,
        one:"Секция 1",
        two:"Секция SSSDSDS 2",
        three:"Секция 3",
        },
    ]

const [items, setItems] = useState(data);

    return (  
        <div className="flex flex-col border border-red-500 p-4">
            <p className="mb-4 text-center">Table</p>
            <div className="flex justify-end">
                <Button text="Кнопочка)" onClick={()=>{
                    let newItem = {
                        one:"новенький",
                        two:"новенький",
                        three:"новенький",
                    }
                    setItems(items => [...items, newItem])
                    console.log(items);
                }}
                />
            </div>
            <div className="flex ">
                <ItemList items={items}/>
            </div>
        </div>
    );
}

export default Table;

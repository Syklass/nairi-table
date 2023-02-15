import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


import "./App.css";
import Table from "./components/Table";
import Button from './components/Button';
import Canvas from './components/Canvas';

function App() {
    const [h1, setH1] = useState("h1")
    const [h2, setH2] = useState("h2")
    const [timer, setTimer] = useState()

    useEffect(()=>{
        {setInterval(() => {
            let time = new Date().toLocaleTimeString()
            setTimer(time)
            }, 1000)}
    })

    const handleH1 = (e) => {
        setH1(e)
    }
    const handleH2 = (e) => {
        setH2(e)
    }




    return <div className="flex flex-col justify-center items-center p-4">
        <div className="w-full">
            <p className="mb-4 text-center">Таблица (1)</p>
            <Table/>
        </div>
        <div className="w-full flex flex-col text-center">
            <p className="my-4">задача 2</p>
            <input onChange={(e) => {handleH1(e.target.value)}} className="text-black my-2 text-center" placeholder='input'></input>
            <h1 className="mb-2">{h1}</h1>
            <h2>{h2}</h2>
            <textarea onChange={(e) => {handleH2(e.target.value)}} className="text-black my-2 text-center" placeholder='textarea'></textarea>
        </div>
        <div className="flex flex-col items-center">
            <p>Timer</p>
            <div className="p-4 bg-white rounded-xl border-4 border-violet-700 text-black text-2xl">
                {timer}
            </div>
        </div>
        <div className="flex flex-col w-full items-center mt-4">
            
            <Canvas/>
        </div>
    </div>;
}



export default App;

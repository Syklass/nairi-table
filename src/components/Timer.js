import React from "react"
import { useState } from "react";
import { useEffect } from 'react';

function Timer() {
    const [timer, setTimer] = useState();
    useEffect(()=>{
        setInterval(() => {
            let time = new Date().toLocaleTimeString()
            setTimer(time)
        }, 1000);
    });
    return (  
        <div className="text-black">
            {timer}
        </div>
    );
};

export default Timer;
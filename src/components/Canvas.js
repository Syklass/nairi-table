import React, { useEffect, useRef } from "react";
import { useState } from "react";

import Button from "./Button";


function Canvas() {
    const [value, setValue] = useState(true)
    const [figure, setFigure] = useState(0)
    const [figureFunc, setFigureFunc] = useState()

    const handleValue = (e) => {
        setValue(e)
    }

    const canvasRef = useRef(null)
    const canvasContext = useRef(null)

    useEffect(() => {
        const cnv = canvasRef.current
        cnv.width = 300
        cnv.height = 300

        const ctx = cnv.getContext('2d')
        ctx.lineCap = 'round'
        ctx.strokeStyle = 'white'
        ctx.fillStyle = 'white'
        ctx.lineWidth = 5
        
        canvasContext.current = ctx
    })

    const drawSq = () => {
        canvasContext.current.strokeRect(10, 10, value, value)
        canvasContext.current.stroke();
    
    }
    const drawSr = () => {
        canvasContext.current.arc(150,150,value,0,Math.PI*2,true);
        canvasContext.current.stroke()
    }
    const drawTre = () => {
        canvasContext.current.beginPath();
        canvasContext.current.moveTo(value,value);
        canvasContext.current.lineTo(0,value);
        canvasContext.current.lineTo(value/2,0);
        canvasContext.current.lineTo(value,value);
        canvasContext.current.fill();
    }


    return (  
        <div className="flex flex-col items-center">
            <p>Canvas</p>
            <input onChange={(e) => {handleValue(e.target.value)}} className="text-black p-2 text-center" placeholder='canvas int' type="number"></input>
            <p className="text-xs mt-4 mb-2">из-за обновления таймера канвас обнуляется, нужно покликать :^)</p>
            <div className="flex justify-between my-2">
                <Button onClick={()=>{
                    drawSq()
                    setFigure(0)
                    setFigureFunc(drawSq())
                }} text="Квадрат с ребром"/>
                <Button onClick={()=>{
                    drawSr()
                    setFigure(1)
                    setFigureFunc(drawSr())
                }} text="Окружность с диаметром" className="mx-4"/>
                <Button onClick={()=>{
                    drawTre()
                    setFigure(2)
                    setFigureFunc(drawTre())
                }} text="Равносторонний треугольник"/>
            </div>
            <p className="text-center mb-2">Выбрано <br/> 
                {figure==0? "Квадрат с ребром" : ""}
                {figure==1? "Окружность с диаметром" : ""}
                {figure==2? "Равносторонний треугольник" : ""}
            </p>
            <canvas className="border-2 rounded-xl border-white" ref={canvasRef}
            />
        </div>
        
    );
}

export default Canvas;
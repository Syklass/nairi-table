import React from "react";

function Button({onClick, text, className}) {
    return (  
        <button onClick={onClick} className={`${className} select-none w-52 h-16 border group rounded-xl transition-all hover:border-opacity-100 hover:border-pink-700`}>
            <p className="group-hover:text-pink-700 transition-all">{text}</p>
        </button>
    );
}

export default Button;
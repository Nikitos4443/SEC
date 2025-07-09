import React from 'react';

function MainCardAbout({title, text}) {
    return (
        <div className="w-[100%] md:w-[40%] bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-6 flex flex-col justify-center items-center md:items-start">
            <h3 className="font-semibold text-lg text-center md:text-left">{title}</h3>
            <span className="text-center md:text-left text-sm">{text}</span>
        </div>
    );
}

export default MainCardAbout;
import React from 'react';
import {Button} from "../shared/index.js";

function MainCardHome({image, title, text, note, isLeft}) {
    return (
        <div className="relative sm:w-[90%] w-[100%] lg:w-[70%] h-auto rounded-md mx-auto">

            <img src={image} alt="img" className="w-full h-full object-cover"/>

            <div
                className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} w-[100%] lg:w-1/2 h-full bg-black/80 rounded-md`}></div>

            <div
                className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} w-[100%] lg:w-1/2 h-full z-20 flex flex-col items-center justify-center lg:items-start xl:justify-end text-white px-10`}>
                <div className="h-[65%] flex flex-col justify-around">
                    <h2 className="font-bold lg:text-3xl sm:text-xl text-lg lg:text-left text-center">{title}</h2>
                    <span className="lg:text-sm mb-4 sm:text-xs text-[10px] lg:text-left text-center">{text}</span>
                    <div
                        className="w-[100%] lg:w-25 text-sm xl:mb-0 mb-4 flex justify-center sm:static absolute bottom-[-30px] left-0">
                        <div>
                            <Button></Button>
                        </div>
                    </div>
                    <div
                        className="w-full sm:block hidden text-md font-semibold text-[#45ACB7] lg:text-left text-center">
                        {note}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainCardHome;
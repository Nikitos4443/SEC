import React from 'react';

function StatisticHome({topText, bottomText}) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-4xl text-[#2C2F56] font-bold">{topText}</span>
            <span className="text-[#45ACB7] text-center">{bottomText}</span>
        </div>
    );
}

export default StatisticHome;
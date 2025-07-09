import React from 'react';

function InfoCardHome({image, title, desc}) {
    return (
        <div className="relative w-60 h-96 overflow-hidden rounded-lg">
            <img
                src={image}
                alt="Card image"
                className="w-full h-full object-cover"
            />
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent from-20% via-black/60 via-50% to-black"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <span className="text-sm opacity-90">{desc}</span>
            </div>
        </div>
    );
}


export default InfoCardHome;
import React from 'react';

function InfoCardHome({ image }) {
    return (
        <div className="w-60 h-100 overflow-hidden">
            <img
                src={image}
                alt="Card image"
                className="w-60 h-auto rounded-md"
            />
        </div>
    );
}


export default InfoCardHome;
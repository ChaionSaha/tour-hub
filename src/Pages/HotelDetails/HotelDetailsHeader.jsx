import React from 'react';

const HotelDetailsHeader = ({title, img}) => {
    return (
        <div
            style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.29) 100%), url(${img})`}}
            className='min-h-[50vh] bgImg flex justify-center items-center px-5 lg:px-0 '
        >
        </div>
    );


};

export default HotelDetailsHeader;
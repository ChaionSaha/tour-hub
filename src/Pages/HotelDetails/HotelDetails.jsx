import React from 'react';
import {useParams} from "react-router-dom";

const HotelDetails = () => {
    const {hid} = useParams();

    return (
        <div>
            This is hotel details page for {hid}
        </div>
    );
};

export default HotelDetails;
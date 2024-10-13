import React from 'react';
import map from '../assets/map.jpg';

const Promotion = () => {
    return (
        <div  data-aos="zoom-in" data-aos-delay="100" className="container mx-auto">
            <img 
                src={map} 
                className="w-full h-48 md:h-96 object-cover" 
                alt="map" 
            />
        </div>
    );
}

export default Promotion;

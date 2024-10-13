import React from 'react';

const Info = () => {
    return (
        <div  className='container'>
            <div data-aos="fade" className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row justify-between">
                {/* Heading Section */}
                <div className="text-left w-full md:w-1/2">
                    <h1 className="text-3xl md:text-6xl font-semibold mb-4 space-y-2">
                        Streamline Your Gala Experience with Our All-in-One App
                    </h1>
                </div>
                
                {/* Description Section */}
                <div className="mt-4 w-full md:w-1/2">
                    <div className="w-full h-1 bg-blue-500 rounded-full"></div>
                    <p className="mt-4 text-lg md:text-2xl text-gray-900 text-left">
                        Effortlessly manage your gala events with our app—seamlessly handle RSVPs, track
                        guest lists, and streamline event details all in one place.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Info;

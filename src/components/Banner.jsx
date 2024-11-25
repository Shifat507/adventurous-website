import React from 'react';
import slider1 from '../assets/eco1-Photoroom-Photoroom.jpg';
import slider2 from '../assets/eco-4-Photoroom.jpg';
import slider3 from '../assets/eco-5-Photoroom.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full">
            
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={slider1}
                    className="w-full h-[500px] object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={slider2}
                    className="w-full h-[500px] object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={slider3}
                    className="w-full h-[500px] object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
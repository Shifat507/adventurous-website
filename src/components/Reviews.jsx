import React from 'react';
import Marquee from 'react-fast-marquee';
import { MdOutlineStarPurple500 } from 'react-icons/md';

const Reviews = () => {
    return (
        <div className='my-10'>
            <h2 className='text-4xl font-bold text-center my-10'>Our Client's Reviews</h2>
            <div className="overflow-x-auto"> 
                <Marquee direction="left" speed={30} className="h-64">
                    <div className="card bg-neutral text-neutral-content w-96 mr-5 h-64">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Emma Farandas</h2>
                            <p>"An unforgettable experience! The mountain hiking tour was well-organized and the guides were extremely knowledgeable. Highly recommend for anyone looking to get away from the hustle and bustle of city life!"</p>
                            <div className="card-actions justify-end">
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-neutral text-neutral-content w-96 mr-5 h-64">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mark</h2>
                            <p>"I was really impressed with how environmentally conscious this company is. The forest trek was fantastic, and it was reassuring to see the team follow sustainable practices Looking forward to more trips with you!"</p>
                            <div className="card-actions justify-end">
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-neutral text-neutral-content w-96 mr-5 h-64">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Angelina Jolly</h2>
                            <p>"I had the best camping experience ever! The campgrounds were beautiful, and the nature walk was peaceful and educational. The guides were super friendly. A perfect blend of adventure and environmental responsibility!"</p>
                            <div className="card-actions justify-end">
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-neutral text-neutral-content w-96 mr-5 h-64">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">David Pitter</h2>
                            <p>"A five-star experience from start to finish. The guides were friendly, the gear was top-notch. Most importantly, I came home with great memories and a deeper respect for nature. Can't wait for my next adventure!"</p>
                            <div className="card-actions justify-end">
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                                <MdOutlineStarPurple500 />
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Reviews;

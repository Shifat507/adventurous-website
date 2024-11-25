import React from 'react';

const AboutUs = () => {
    return (
        <section className="py-16 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-green-900 sm:text-4xl">About Us</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Welcome to <strong>Adventurous</strong> — your gateway to unforgettable eco-adventures. Our mission is to connect you with nature, providing thrilling yet sustainable experiences that protect the environment.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-gray-700">
                        <h3 className="text-2xl font-semibold">Our Story</h3>
                        <p className="mt-4">
                            Founded by passionate environmentalists, <strong>Adventurous</strong> was born from a love for nature and a desire to protect it. We offer curated eco-tourism experiences that allow you to explore some of the most beautiful natural landscapes while promoting sustainable practices.
                        </p>
                        <p className="mt-4">
                            Whether it's hiking through lush forests, kayaking in pristine waters, or engaging with local wildlife, we provide the tools for an adventure that leaves a positive impact on both you and the planet.
                        </p>
                    </div>
                    <div className="text-gray-700">
                        <h3 className="text-2xl font-semibold">Our Vision</h3>
                        <p className="mt-4">
                            Our goal is to inspire adventure seekers to explore the world responsibly. We envision a world where every eco-adventure not only nurtures the spirit but also contributes to the preservation of our environment. Through sustainable travel, we aim to build a deeper connection with nature and encourage conservation efforts.
                        </p>
                        <p className="mt-4">
                            Join us at <strong>Adventurous</strong> for your next adventure — where exploration meets sustainability. Together, let's make a difference.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

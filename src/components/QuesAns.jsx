import React from 'react';

const QuesAns = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold my-5'>Frequently Asked Questions</h1>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">What types of adventure activities do you offer?</div>
                <div className="collapse-content">
                    <p>We offer a variety of adventure activities, including mountain hiking, forest treks, camping, nature walks, and eco-friendly expeditions. Each activity is designed to provide an immersive experience in nature while promoting sustainability and conservation.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Are the adventure tours suitable for beginners?</div>
                <div className="collapse-content">
                    <p>helloYes! Our adventure tours cater to all levels of experience, from beginners to seasoned adventurers. Whether you're a first-time hiker or an experienced mountaineer, we have the perfect itinerary for you. Our guides ensure that safety is a priority and that you’re well-prepared for each adventure.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How do you ensure eco-friendliness during the tours?</div>
                <div className="collapse-content">
                    <p>We are committed to sustainability and minimizing our environmental impact. Our eco-friendly features include waste management systems, leaving no trace on the trails, using reusable equipment, and promoting responsible travel. We also partner with local communities to support conservation efforts and preserve the natural beauty of the areas we explore.</p>
                </div>
            </div>
        </div>
    );
};

export default QuesAns;
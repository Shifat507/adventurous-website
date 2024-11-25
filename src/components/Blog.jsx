import React from 'react';

const Blog = ({ blog }) => {
    const { adventureTitle, image, ecoFriendlyFeatures } = blog;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl gap-2 w-full md:w-[600px] h-auto md:h-[350px] flex flex-col md:flex-row">
                <figure className='w-full md:w-[50%] h-[200px] md:h-full'>
                    <img className='w-full h-full object-cover'
                        src={image}
                        alt={adventureTitle} />
                </figure>
                <div className="card-body w-full md:w-[50%] p-4">
                    <h2 className="card-title">{adventureTitle}</h2>
                    <h3 className='text-xl font-bold'>Features: </h3>
                    
                        {ecoFriendlyFeatures.map((feature, index) => <li key={index}>{feature}</li>)}
                    
                    <div className="card-actions justify-end mt-5">
                        <button className="btn btn-primary">Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;

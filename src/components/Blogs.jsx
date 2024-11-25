import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog';
import { Helmet } from 'react-helmet-async';


const Blogs = () => {
    const data = useLoaderData();
    return (
        <div className=''>
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            <div>
                <h1 className='text-4xl font-bold text-center my-10'>All Blogs</h1>

                <div className='w-11/12 mx-auto my-10 grid lg:grid-cols-2 gap-16'>

                    {
                        data.map((blog, idx) => <Blog key={idx} blog={blog}></Blog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;    